const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const items = require("./routes/api/items");
const app = express();

const scheduler = require("./scheduler");

// const CronJob = require('cron').CronJob;
// const moment = require('moment');  
// const notification = require('./workers/notifications');

// const schedulerTimer = new CronJob('30 2 * * *', function() {
//         console.log('Running Send Notifications Worker ' + new Date().toDateString());
//         notification.run();
//       }, null, true, '');
// schedulerTimer.start();

// CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
const port = process.env.PORT || 5000; 

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server up and running on port ${port}!`)))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//run the expiry date checker scheduler
scheduler.start();

// Routes
app.use("/api/users", users);
app.use("/api/items", items);