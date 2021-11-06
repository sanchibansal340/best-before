const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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