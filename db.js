// db.js
const mongoose = require("mongoose");

// MongoDB Connection String
const connectionString = "mongodb://localhost:27017/gold-rates-db"; // Update with your DB name

// Connect to MongoDB
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

module.exports = mongoose; // Export the mongoose object for use in other files
