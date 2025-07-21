require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const googleRoutes = require('./routes/googleRoutes'); // Import Google routes
const studySwapRoutes = require('./routes/studyswap'); // Import StudySwap routes
const { scheduleNotifications } = require('./cron'); // Import cron scheduler

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const allowedOrigins = [
  'http://localhost:5173',
  'https://student-helper-yaye.vercel.app',
  'http://localhost:5000',
  'https://student-helper-b5j4.onrender.com'
];

// CORS setup
app.use(cors({
  origin: function (origin, callback) {
    console.log('CORS Request from origin:', origin); // Debug log
    
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('CORS: Origin allowed'); // Debug log
      return callback(null, true);
    }
    
    // In production, be more permissive for Google OAuth redirects
    if (process.env.NODE_ENV === 'production') {
      // Allow all https origins for Google OAuth callback
      if (origin && origin.includes('accounts.google.com')) {
        console.log('CORS: Google OAuth origin allowed'); // Debug log
        return callback(null, true);
      }
    }
    
    console.log('CORS blocked origin:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));

// API routes with /api prefix
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/google', googleRoutes); // Mount Google routes
app.use('/api/studyswap', studySwapRoutes); // Mount StudySwap routes

// Legacy routes without /api prefix for backward compatibility
app.use('/auth', authRoutes);
app.use('/product', productRoutes);

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

