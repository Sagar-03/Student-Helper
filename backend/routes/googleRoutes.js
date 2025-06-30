const express = require('express');
const router = express.Router();
const googleController = require('../controllers/googleController');

// Health check endpoint for Google OAuth
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Google OAuth service is running',
    environment: process.env.NODE_ENV,
    redirectUri: process.env.NODE_ENV === 'production' 
      ? `${process.env.PRODUCTION_BACKEND_URL}/api/google/callback`
      : process.env.GOOGLE_REDIRECT_URI || 'http://localhost:5000/api/google/callback',
    timestamp: new Date().toISOString()
  });
});

// Route to initiate Google OAuth
router.get('/auth', googleController.getAuthUrl);

// Route to handle Google OAuth callback
router.get('/callback', googleController.handleCallback);

// Route to verify Google token
router.post('/verify-token', googleController.verifyToken);

// Route to get Google Classroom courses
router.get('/courses', googleController.getCourses);

// Route to get assignments for a specific course
router.get('/courses/:courseId/assignments', googleController.getCourseAssignments);

// Route to enable notifications
router.post('/notifications/enable', googleController.enableNotifications);

module.exports = router;