const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Twilio = require('twilio');
require('dotenv').config();

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  expDate: {
    type: Date,
    required: true
  }
});

itemSchema.methods.requiresNotification = function(date) {
  return Math.ceil((new Date(this.expDate) - date) / (1000 * 60 * 60 * 24)) === 0;
};

itemSchema.statics.sendNotifications = function(callback) {
  const searchDate = Date.now();
  Item
    .find()
    .then(function(items) {
      items = items.filter(function(item) {
        return item.requiresNotification(searchDate);
      });
      if (items.length > 0) {
        console.log("Items that have expired ", items);
        sendNotifications(items);
      }
  });

  function sendNotifications(items) {

  const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    items.forEach(function(item) {
      const message = {
        to: `+19283250811`,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: `Hi! Just a quick reminder that ${item.itemName} has expired!`,
      };

      client.messages.create(message, function(err, res){
        if(err) {
          console.log(err);
        } else {
          console.log(`Reminder sent to 9283250811`);
        }
      });
    });
    if (callback) {
      callback.call();
    }
  }
};

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    items: [{
      type: Schema.Types.ObjectId, 
      ref: 'Item'
    }]
});

const Item = mongoose.model('Item', itemSchema);
const User = mongoose.model('User', userSchema);

module.exports = { User, Item };