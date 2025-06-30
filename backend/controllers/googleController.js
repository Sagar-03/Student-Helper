const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require(path.join(__dirname, '../models/userModel'));
const NotificationSubscription = require('../models/notificationSubscriptionModel');

// OAuth2 configuration - dynamically set redirect URI based on environment
const getRedirectUri = () => {
  // Check if we're in production or development
  if (process.env.NODE_ENV === 'production' && process.env.PRODUCTION_BACKEND_URL) {
    return `${process.env.PRODUCTION_BACKEND_URL}/api/google/callback`;
  }
  return process.env.GOOGLE_REDIRECT_URI || 'http://localhost:5000/api/google/callback';
};

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  getRedirectUri()
);

// Scopes required for Google Classroom
const SCOPES = [
  'https://www.googleapis.com/auth/classroom.courses.readonly',
  'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
  'https://www.googleapis.com/auth/classroom.announcements.readonly',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];

// Generate a redirect URL for Google OAuth2 login
exports.getAuthUrl = (req, res) => {
  try {
    console.log('OAuth getAuthUrl called with environment:', process.env.NODE_ENV);
    console.log('Redirect URI being used:', getRedirectUri());
    
    // Check if this is coming from the auth page or classroom page via query parameter
    const source = req.query.source || 'classroom'; // Default to classroom for backward compatibility
    const state = source === 'auth' ? 'auth' : 'classroom';
    
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent', // Force to get refresh token
      state: state // Pass state to identify the source
    });
    
    console.log('Generated auth URL successfully');
    res.redirect(url);
  } catch (error) {
    console.error('Error generating auth URL:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate Google authentication URL',
      error: error.message
    });
  }
};

// Handle Google OAuth2 callback
exports.handleCallback = async (req, res) => {
  const { code, state } = req.query;
  
  if (!code) {
    return res.status(400).json({
      success: false,
      message: 'Authorization code is missing'
    });
  }
  
  try {
    console.log('Starting OAuth code exchange...');
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    
    if (!tokens || !tokens.access_token) {
      console.error('Invalid tokens received:', tokens);
      throw new Error('Received invalid tokens from Google');
    }
    
    console.log('Code exchange successful, setting credentials');
    oauth2Client.setCredentials(tokens);
    
    // Get user profile information
    console.log('Fetching user profile information...');
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const userInfo = await oauth2.userinfo.get();
    
    if (!userInfo || !userInfo.data || !userInfo.data.email) {
      console.error('Invalid user info received:', userInfo);
      throw new Error('Received invalid user information from Google');
    }
    
    console.log('User info retrieved successfully');
    
    // Generate our own token that includes Google tokens and user info
    const googleToken = jwt.sign(
      {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        user: userInfo.data
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Check if user exists in our database
    let user = await User.findOne({ email: userInfo.data.email });
    
    if (!user) {
      // Create a new user if not exists
      user = new User({
        name: userInfo.data.name,
        email: userInfo.data.email,
        googleId: userInfo.data.id,
        profilePicture: userInfo.data.picture
      });
      await user.save();
    } else {
      // Update existing user with latest Google info
      user.name = userInfo.data.name;
      user.googleId = userInfo.data.id;
      user.profilePicture = userInfo.data.picture;
      await user.save();
    }
    
    // Get frontend URL based on environment
    const getFrontendUrl = () => {
      if (process.env.NODE_ENV === 'production' && process.env.PRODUCTION_FRONTEND_URL) {
        return process.env.PRODUCTION_FRONTEND_URL;
      }
      return process.env.FRONTEND_URL || 'http://localhost:5173';
    };
    
    // Redirect based on the source (auth or classroom)
    const redirectPath = state === 'auth' ? '/auth' : '/googleclassroom';
    res.redirect(`${getFrontendUrl()}${redirectPath}?token=${googleToken}`);
  } catch (error) {
    console.error('Error handling Google callback:', error);
    const getFrontendUrl = () => {
      if (process.env.NODE_ENV === 'production' && process.env.PRODUCTION_FRONTEND_URL) {
        return process.env.PRODUCTION_FRONTEND_URL;
      }
      return process.env.FRONTEND_URL || 'http://localhost:5173';
    };
    const redirectPath = req.query.state === 'auth' ? '/auth' : '/googleclassroom';
    res.redirect(`${getFrontendUrl()}${redirectPath}?error=${encodeURIComponent(error.message)}`);
  }
};

// Verify Google token validity
exports.verifyToken = async (req, res) => {
  const { token } = req.body;
  
  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'Token is required'
    });
  }
  
  try {
    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if Google access token is still valid
    oauth2Client.setCredentials({
      access_token: decoded.accessToken,
      refresh_token: decoded.refreshToken
    });
    
    // Try to use the token to verify it's still valid
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    await oauth2.userinfo.get();
    
    res.status(200).json({
      success: true,
      valid: true,
      user: decoded.user
    });
  } catch (error) {
    console.error('Token verification error:', error);
    
    // If token is expired, try to refresh
    if (error.name === 'TokenExpiredError') {
      try {
        const decoded = jwt.decode(token);
        
        oauth2Client.setCredentials({
          refresh_token: decoded.refreshToken
        });
        
        const { credentials } = await oauth2Client.refreshAccessToken();
        
        // Get user info again
        oauth2Client.setCredentials(credentials);
        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
        const userInfo = await oauth2.userinfo.get();
        
        // Generate new token
        const newToken = jwt.sign(
          {
            accessToken: credentials.access_token,
            refreshToken: credentials.refresh_token || decoded.refreshToken,
            user: userInfo.data
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' }
        );
        
        return res.status(200).json({
          success: true,
          valid: true,
          newToken,
          user: userInfo.data
        });
      } catch (refreshError) {
        console.error('Token refresh error:', refreshError);
      }
    }
    
    res.status(401).json({
      success: false,
      valid: false,
      message: 'Invalid or expired token'
    });
  }
};

// Helper function to check if Classroom API is enabled
const checkClassroomAPIEnabled = async (auth) => {
  try {
    const classroom = google.classroom({ version: 'v1', auth });
    // Try a simple API call to check if the API is enabled
    await classroom.courses.list({ pageSize: 1 });
    return { enabled: true };
  } catch (error) {
    if (error.status === 403 && error.message.includes('API has not been used')) {
      return { 
        enabled: false, 
        error: 'Google Classroom API is not enabled for this project',
        projectId: error.message.match(/project (\d+)/)?.[1]
      };
    }
    throw error;
  }
};

// Get user's Google Classroom courses
exports.getCourses = async (req, res) => {
  try {
    // Get token from Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token is required'
      });
    }
    
    // Decode token and set credentials
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    oauth2Client.setCredentials({
      access_token: decoded.accessToken,
      refresh_token: decoded.refreshToken
    });
    
    // Check if Classroom API is enabled before proceeding
    const apiCheck = await checkClassroomAPIEnabled(oauth2Client);
    if (!apiCheck.enabled) {
      console.error('Classroom API check failed:', apiCheck);
      return res.status(403).json({
        success: false,
        message: 'Google Classroom API is not enabled',
        details: apiCheck.error,
        projectId: apiCheck.projectId,
        enableUrl: `https://console.developers.google.com/apis/api/classroom.googleapis.com/overview?project=${apiCheck.projectId}`
      });
    }
    
    // Initialize Google Classroom API
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    
    // Get courses with retry logic
    let response;
    let retryCount = 0;
    const maxRetries = 3;
    
    while (retryCount < maxRetries) {
      try {
        response = await classroom.courses.list({
          courseStates: ['ACTIVE', 'ARCHIVED'],
          pageSize: 20
        });
        break; // Success, exit the retry loop
      } catch (error) {
        retryCount++;
        console.error(`Attempt ${retryCount} failed to get courses:`, error.message);
        
        if (retryCount >= maxRetries) {
          throw error; // Re-throw if all retries exhausted
        }
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
      }
    }
    
    // Process course data
    const courses = response.data.courses || [];
    
    // If there are courses, get teacher names for each course
    for (const course of courses) {
      try {
        const teachersResponse = await classroom.courses.teachers.list({
          courseId: course.id
        });
        
        course.teacherNames = teachersResponse.data.teachers
          ? teachersResponse.data.teachers.map(teacher => teacher.profile.name.fullName)
          : [];
      } catch (err) {
        console.error(`Failed to get teachers for course ${course.id}:`, err);
        course.teacherNames = [];
      }
    }
    
    res.status(200).json(courses);
  } catch (error) {
    console.error('Failed to get courses:', error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }
    
    // Check if it's a Google Classroom API not enabled error
    if (error.code === 403 && error.errors && error.errors[0]?.reason === 'accessNotConfigured') {
      return res.status(403).json({
        success: false,
        message: 'Google Classroom API is not enabled. Please enable it in Google Cloud Console.',
        error: 'API_NOT_ENABLED',
        enableUrl: `https://console.developers.google.com/apis/api/classroom.googleapis.com/overview?project=${process.env.GOOGLE_PROJECT_ID || 'your-project-id'}`
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to fetch courses from Google Classroom'
    });
  }
};

// Get assignments for a specific course
exports.getCourseAssignments = async (req, res) => {
  try {
    const { courseId } = req.params;
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token is required'
      });
    }
    
    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: 'Course ID is required'
      });
    }
    
    // Decode token and set credentials
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    oauth2Client.setCredentials({
      access_token: decoded.accessToken,
      refresh_token: decoded.refreshToken
    });
    
    // Initialize Google Classroom API
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    
    // Get course work (assignments)
    const response = await classroom.courses.courseWork.list({
      courseId,
      orderBy: 'dueDate desc',
      pageSize: 30
    });
    
    const assignments = response.data.courseWork || [];
    
    // Get submission status for each assignment
    for (const assignment of assignments) {
      try {
        const submissionsResponse = await classroom.courses.courseWork.studentSubmissions.list({
          courseId,
          courseWorkId: assignment.id,
          userId: 'me'
        });
        
        if (submissionsResponse.data.studentSubmissions && submissionsResponse.data.studentSubmissions.length > 0) {
          const submission = submissionsResponse.data.studentSubmissions[0];
          assignment.state = submission.state;
          
          if (submission.assignedGrade) {
            assignment.grade = submission.assignedGrade;
          }
        }
      } catch (err) {
        console.error(`Failed to get submission for assignment ${assignment.id}:`, err);
      }
      
      // Format due date if exists
      if (assignment.dueDate && assignment.dueTime) {
        const date = new Date(
          assignment.dueDate.year,
          assignment.dueDate.month - 1,
          assignment.dueDate.day,
          assignment.dueTime.hours || 0,
          assignment.dueTime.minutes || 0
        );
        assignment.dueDate = date.toISOString();
      } else {
        assignment.dueDate = null;
      }
    }
    
    res.status(200).json(assignments);
  } catch (error) {
    console.error('Failed to get course assignments:', error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }
    
    // Check if it's a Google Classroom API not enabled error
    if (error.code === 403 && error.errors && error.errors[0]?.reason === 'accessNotConfigured') {
      return res.status(403).json({
        success: false,
        message: 'Google Classroom API is not enabled. Please enable it in Google Cloud Console.',
        error: 'API_NOT_ENABLED',
        enableUrl: `https://console.developers.google.com/apis/api/classroom.googleapis.com/overview?project=${process.env.GOOGLE_PROJECT_ID || 'your-project-id'}`
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to fetch assignments from Google Classroom'
    });
  }
};

// Enable notifications for assignment deadlines
exports.enableNotifications = async (req, res) => {
  try {
    const { userId, token } = req.body;
    
    if (!userId || !token) {
      return res.status(400).json({
        success: false,
        message: 'User ID and token are required'
      });
    }
    
    // Check if a subscription already exists
    let subscription = await NotificationSubscription.findOne({ userId });
    
    if (!subscription) {
      // Create a new subscription
      subscription = new NotificationSubscription({
        userId,
        googleToken: token,
        notificationPreferences: {
          dayBefore: true,
          dayOf: true
        }
      });
    } else {
      // Update existing subscription
      subscription.googleToken = token;
      subscription.notificationPreferences = {
        dayBefore: true,
        dayOf: true
      };
    }
    
    await subscription.save();
    
    res.status(200).json({
      success: true,
      message: 'Notifications enabled successfully'
    });
  } catch (error) {
    console.error('Failed to enable notifications:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to enable notifications'
    });
  }
};

// Schedule job to send notifications for upcoming deadlines
exports.sendDeadlineNotifications = async () => {
  try {
    // Get all notification subscriptions
    const subscriptions = await NotificationSubscription.find({});
    console.log(`Found ${subscriptions.length} notification subscriptions`);
    
    for (const subscription of subscriptions) {
      try {
        // Decode token and set credentials
        const decoded = jwt.verify(subscription.googleToken, process.env.JWT_SECRET);
        oauth2Client.setCredentials({
          access_token: decoded.accessToken,
          refresh_token: decoded.refreshToken
        });
        
        // Initialize Google Classroom API
        const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
        
        // Get courses
        const coursesResponse = await classroom.courses.list({
          courseStates: ['ACTIVE'],
          pageSize: 20
        });
        
        const courses = coursesResponse.data.courses || [];
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Format dates to match Google Classroom format
        const todayFormatted = {
          year: today.getFullYear(),
          month: today.getMonth() + 1,
          day: today.getDate()
        };
        
        const tomorrowFormatted = {
          year: tomorrow.getFullYear(),
          month: tomorrow.getMonth() + 1,
          day: tomorrow.getDate()
        };
        
        // Check each course for assignments due today or tomorrow
        for (const course of courses) {
          try {
            const assignmentsResponse = await classroom.courses.courseWork.list({
              courseId: course.id,
              orderBy: 'dueDate asc'
            });
            
            const assignments = assignmentsResponse.data.courseWork || [];
            
            // Check each assignment's due date
            for (const assignment of assignments) {
              if (!assignment.dueDate) continue;
              
              // Check if assignment is due today
              if (subscription.notificationPreferences.dayOf && 
                  assignment.dueDate.year === todayFormatted.year &&
                  assignment.dueDate.month === todayFormatted.month &&
                  assignment.dueDate.day === todayFormatted.day) {
                
                // Get submission status to check if it's already submitted
                const submissionsResponse = await classroom.courses.courseWork.studentSubmissions.list({
                  courseId: course.id,
                  courseWorkId: assignment.id,
                  userId: 'me'
                });
                
                const submission = submissionsResponse.data.studentSubmissions?.[0];
                
                if (!submission || submission.state === 'CREATED' || submission.state === 'NEW') {
                  // Send notification for assignment due today
                  console.log(`Sending notification for assignment due today: ${assignment.title}`);
                  
                  // In a real implementation, this would send a push notification or email
                  // For now, we log it
                  console.log({
                    userId: subscription.userId,
                    message: `REMINDER: "${assignment.title}" for ${course.name} is due TODAY!`,
                    dueTime: assignment.dueTime ? `${assignment.dueTime.hours}:${assignment.dueTime.minutes}` : 'End of day'
                  });
                }
              }
              
              // Check if assignment is due tomorrow
              if (subscription.notificationPreferences.dayBefore && 
                  assignment.dueDate.year === tomorrowFormatted.year &&
                  assignment.dueDate.month === tomorrowFormatted.month &&
                  assignment.dueDate.day === tomorrowFormatted.day) {
                
                // Get submission status to check if it's already submitted
                const submissionsResponse = await classroom.courses.courseWork.studentSubmissions.list({
                  courseId: course.id,
                  courseWorkId: assignment.id,
                  userId: 'me'
                });
                
                const submission = submissionsResponse.data.studentSubmissions?.[0];
                
                if (!submission || submission.state === 'CREATED' || submission.state === 'NEW') {
                  // Send notification for assignment due tomorrow
                  console.log(`Sending notification for assignment due tomorrow: ${assignment.title}`);
                  
                  // In a real implementation, this would send a push notification or email
                  console.log({
                    userId: subscription.userId,
                    message: `REMINDER: "${assignment.title}" for ${course.name} is due TOMORROW!`,
                    dueTime: assignment.dueTime ? `${assignment.dueTime.hours}:${assignment.dueTime.minutes}` : 'End of day'
                  });
                }
              }
            }
          } catch (courseError) {
            console.error(`Error processing course ${course.id}:`, courseError);
          }
        }
      } catch (subscriptionError) {
        console.error(`Error processing subscription for user ${subscription.userId}:`, subscriptionError);
        
        // If token is expired, mark the subscription as inactive
        if (subscriptionError.name === 'TokenExpiredError') {
          subscription.active = false;
          await subscription.save();
        }
      }
    }
    
    console.log('Notification check completed');
  } catch (error) {
    console.error('Failed to send deadline notifications:', error);
  }
};

// Test endpoint to check Google Classroom API status
exports.testClassroomAPI = async (req, res) => {
  try {
    // Get token from Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token is required'
      });
    }
    
    // Decode token and set credentials
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    oauth2Client.setCredentials({
      access_token: decoded.accessToken,
      refresh_token: decoded.refreshToken
    });
    
    // Test the API
    const apiCheck = await checkClassroomAPIEnabled(oauth2Client);
    
    if (apiCheck.enabled) {
      res.json({
        success: true,
        message: 'Google Classroom API is enabled and accessible',
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(403).json({
        success: false,
        message: 'Google Classroom API is not enabled',
        details: apiCheck.error,
        projectId: apiCheck.projectId,
        enableUrl: `https://console.developers.google.com/apis/api/classroom.googleapis.com/overview?project=${apiCheck.projectId}`,
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Error testing Classroom API:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to test Google Classroom API',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};

// Debug endpoint to test OAuth configuration
exports.debugConfig = (req, res) => {
  try {
    const config = {
      nodeEnv: process.env.NODE_ENV,
      redirectUri: getRedirectUri(),
      hasClientId: !!process.env.GOOGLE_CLIENT_ID,
      hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
      frontendUrl: process.env.NODE_ENV === 'production' && process.env.PRODUCTION_FRONTEND_URL 
        ? process.env.PRODUCTION_FRONTEND_URL 
        : process.env.FRONTEND_URL || 'http://localhost:5173',
      backendUrl: process.env.NODE_ENV === 'production' && process.env.PRODUCTION_BACKEND_URL
        ? process.env.PRODUCTION_BACKEND_URL
        : 'http://localhost:5000'
    };
    
    res.json({
      success: true,
      config: config,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Debug config failed',
      error: error.message
    });
  }
};
