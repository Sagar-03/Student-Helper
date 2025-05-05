const mongoose = require('mongoose');

const writerServiceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  expertise: {
    type: [String],
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

writerServiceSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('WriterService', writerServiceSchema);
