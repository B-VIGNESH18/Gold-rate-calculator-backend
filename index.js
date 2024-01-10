// index.js
const express = require("express");
const goldRatesRouter = require("./routes/goldRates");
const mongoose = require("./db"); // Import the MongoDB connection
const cors = require("cors");

const app = express();

// Express middleware and routes setup
// Define your CRUD routes for managing gold rates
const corsOptions = {
  origin: "http://localhost:5173", // Adjust this with your frontend URL
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ["GET", "POST"], // Allow specific methods
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.get("/gold-rates", (req, res) => {
  // Mock gold rate data
  const goldRates = [
    { date: "2023-11-01", rate: 1500 },
    { date: "2023-11-02", rate: 1510 },
    { date: "2023-11-03", rate: 1520 },
    // ... add more data as needed
  ];

  // Respond with the gold rate data in JSON format
  res.json(goldRates);
});
app.get("/chart-data", (req, res) => {
  // Mock chart data (an array of numbers for demonstration)
  // const chartData = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Array of labels for the x-axis
  //   dataPoints: [100, 110, 105, 115, 120], // Array of data points for the y-axis
  // };

  // Respond with the chart data in JSON format
  res.json(chartData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
