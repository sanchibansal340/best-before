const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const app = express();

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

// Routes
app.use("/api/users", users);