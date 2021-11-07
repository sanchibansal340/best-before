'use strict';

const { Item } = require('../models/schema');

const notifications = function() {
  return {
    run: function() {
      Item.sendNotifications();
    },
  };
};

module.exports = notifications();