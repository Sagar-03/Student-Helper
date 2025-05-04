require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('./middleware/corsMiddleware');
const app = express();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const googleRoutes = require('./routes/googleRoutes');
const { scheduleNotifications } = require('./cron');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Apply CORS middleware
app.use(corsMiddleware);

// Pre-flight OPTIONS handling for CORS
app.options('*', corsMiddleware);

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/google', googleRoutes);

// Initialize cron jobs
scheduleNotifications();

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

startServer();
