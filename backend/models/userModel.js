const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  googleId: {
    type: String
  },
  profilePicture: {
    type: String
  },
  // ... any other fields in your schema
}, {
  timestamps: true
});

// Check if the model exists before compiling it
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
