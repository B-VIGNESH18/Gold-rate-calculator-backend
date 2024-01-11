// db.js
const mongoose = require("mongoose");

// MongoDB Connection String
const connectionString =
  "mongodb+srv://vignesh:0DSRbN0CUZ8S7VK7@cluster0.2zrfree.mongodb.net//gold-rates-db"; // Update with your DB name

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
