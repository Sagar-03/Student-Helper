const express = require('express');
const router = express.Router();
const googleController = require('../controllers/googleController');

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