const express = require('express');
const router = express.Router();
const googleController = require('../controllers/googleController');

// OAuth routes
router.get('/auth', googleController.getAuthUrl);
router.get('/callback', googleController.handleCallback);
router.post('/verify-token', googleController.verifyToken);

// Google Classroom routes
router.get('/classroom/test', googleController.testClassroomAPI);
router.get('/classroom/courses', googleController.getCourses);
router.get('/classroom/courses/:courseId/assignments', googleController.getCourseAssignments);
router.post('/classroom/enable-notifications', googleController.enableNotifications);

module.exports = router;
