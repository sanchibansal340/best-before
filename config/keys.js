require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.BCRYPT_KEY_SECRET
  };