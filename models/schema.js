const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  }
})

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
    items: [itemSchema]
  });

// model name should be singular of the collection name where you want to store it
module.exports = { 
  User: mongoose.model('User', userSchema)
};