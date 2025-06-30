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
  'https://student-helper-yave.vercel.app',
  'http://localhost:5000',
  'https://student-helper-b5j4.onrender.com'
];

// CORS setup
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/google', googleRoutes); // Mount Google routes
app.use('/api/studyswap', studySwapRoutes); // Mount StudySwap routes

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

