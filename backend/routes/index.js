const express = require('express');
const router = express.Router();

// Import specific route files
const studyswapRoutes = require('./studyswap');
const authRoutes = require('./auth');
// Add other route imports as needed

// Health check endpoint
router.get('/health-check', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Use specific route files
router.use('/studyswap', studyswapRoutes);
router.use('/auth', authRoutes);
// Add other routes as needed

module.exports = router;
