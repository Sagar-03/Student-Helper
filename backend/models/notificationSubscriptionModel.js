const mongoose = require('mongoose');

const notificationSubscriptionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  googleToken: {
    type: String,
    required: true
  },
  notificationPreferences: {
    dayBefore: {
      type: Boolean,
      default: true
    },
    dayOf: {
      type: Boolean,
      default: true
    }
  },
  active: {
    type: Boolean,
    default: true
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

// Update the updatedAt field on save
notificationSubscriptionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('NotificationSubscription', notificationSubscriptionSchema);
