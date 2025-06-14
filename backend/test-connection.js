// test-connection.js
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected locally!");
    process.exit();
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });
