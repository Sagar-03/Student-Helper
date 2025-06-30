const express = require('express');
const router = express.Router();
const studySwapController = require('../controllers/studySwapController');
const verifyToken = require('../middleware/verifyToken');

// Health check endpoint
router.get('/health-check', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'StudySwap API is running' });
});

// router.post('/requests', verifyToken, controller.createAssignmentRequest);

// Assignment request routes (for students posting requirements)
router.get('/requests', studySwapController.getAllAssignmentRequests);
router.post('/requests', verifyToken, studySwapController.createAssignmentRequest);
router.get('/requests/:id', studySwapController.getAssignmentRequestById);
router.put('/requests/:id', verifyToken, studySwapController.updateAssignmentRequest);
router.delete('/requests/:id', verifyToken, studySwapController.deleteAssignmentRequest);

// Writer service routes (for writers offering services)
router.get('/writers', studySwapController.getAllWriterServices);
router.post('/writers', verifyToken, studySwapController.createWriterService);
router.get('/writers/:id', studySwapController.getWriterServiceById);
router.put('/writers/:id', verifyToken, studySwapController.updateWriterService);
router.delete('/writers/:id', verifyToken, studySwapController.deleteWriterService);

module.exports = router;
