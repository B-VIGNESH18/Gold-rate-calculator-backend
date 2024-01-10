// // backend/routes/goldRates.js

// const express = require('express');
// const router = express.Router();

// // Define a GET route for /gold-rates
// router.get('/', (req, res) => {
//   // Your logic to retrieve gold rates from the database or any other source
//   // Send back a response with the gold rates
//   res.json({ goldRates: /* Retrieve gold rates here */ });
// });

// module.exports = router;
// backend/routes/goldRates.js

const express = require("express");
const router = express.Router();

// Define a GET route for /gold-rates
router.get("/", async (req, res) => {
  try {
    // Your logic to retrieve gold rates from the database or any other source
    // For example, using Mongoose with MongoDB
    const goldRates = await GoldRateModel.find(); // Replace this with your actual database retrieval logic

    // Send back a response with the gold rates
    res.json({ goldRates });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
