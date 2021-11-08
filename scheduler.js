const CronJob = require('cron').CronJob;
const moment = require('moment');  
const notification = require('./workers/notifications');

const schedulerTimer = function() {
  return {
    start: function() {
      new CronJob('30 6 * * *', function() {
        console.log('Running Send Notifications Worker for ' + moment().format());
        notification.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerTimer();