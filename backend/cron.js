const cron = require('node-cron');
const googleController = require('./controllers/googleController');

// Schedule notifications check to run twice daily
// At 8:00 AM and 8:00 PM
const scheduleNotifications = () => {
  cron.schedule('0 8,20 * * *', async () => {
    console.log('Running deadline notifications check...');
    await googleController.sendDeadlineNotifications();
  });
  
  console.log('Notification scheduler initialized');
};

module.exports = {
  scheduleNotifications
};
