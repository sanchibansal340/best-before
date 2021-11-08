const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const items = require("./routes/api/items");
const app = express();

const scheduler = require("./scheduler");

// CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
const port = process.env.PORT || 5000;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//run the expiry date checker scheduler
scheduler.start();

// Routes
app.use("/api/users", users);
app.use("/api/items", items);

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server up and running on port ${port}!`)))
  .catch(err => console.log(err));
