// // index.js
// const express = require("express");
// const goldRatesRouter = require("./routes/goldRates");
// const mongoose = require("./db"); // Import the MongoDB connection
// const cors = require("cors");

// const app = express();

// // Express middleware and routes setup
// // Define your CRUD routes for managing gold rates
// const corsOptions = {
//   origin: "http://localhost:5173", // Adjust this with your frontend URL
//   optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   methods: ["GET", "POST"], // Allow specific methods
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors());
// app.get("/", (request, res) => {
//   res.send("hellow");
// });
// app.get("/gold-rates", (req, res) => {
//   // Mock gold rate data
//   const goldRates = [
//     { date: "2023-11-01", rate: 1500 },
//     { date: "2023-11-02", rate: 1510 },
//     { date: "2023-11-03", rate: 1520 },
//     // ... add more data as needed
//   ];

//   // Respond with the gold rate data in JSON format
//   res.json(goldRates);
// });
// app.get("/chart-data", (req, res) => {
//   // Mock chart data (an array of numbers for demonstration)
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Array of labels for the x-axis
//     dataPoints: [100, 110, 105, 115, 120], // Array of data points for the y-axis
//   };

//   // Respond with the chart data in JSON format
//   res.json(chartData);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const goldRatesRouter = require("./routes/goldRates");
// const mongoose = require("./db"); // Import the MongoDB connection

// const app = express();

// // Middleware
// // app.use(
// //   cors({
// //     origin: "http://localhost:5173", // Update this with your frontend URL
// //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// //     credentials: true,
// //     optionsSuccessStatus: 204,
// //   })
// // );
// const corsOptions = {
//   origin: "http://localhost:5173",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// // Routes
// app.get("/", (request, res) => {
//   res.send("Hello");
// });

// // Your existing gold rates and chart data routes...
// app.get("/gold-rates", goldRatesRouter);
// app.get("/chart-data", (req, res) => {
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     dataPoints: [100, 110, 105, 115, 120],
//   };
//   res.json(chartData);
// });

// // Authentication routes
// const users = [
//   { id: 1, username: "user", password: "password" },
//   // Add more users as needed
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.json({ user: user.username });
//   } else {
//     res.status(401).json({ message: "Invalid username or password" });
//   }
// });

// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (users.some((u) => u.username === username)) {
//     res.status(400).json({ message: "Username already exists" });
//   } else {
//     const newUser = { id: users.length + 1, username, password };
//     users.push(newUser);
//     res.json({ user: newUser.username });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const goldRatesRouter = require("./routes/goldRates");
// // const mongoose = require("./db"); // Import the MongoDB connection

// // const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(bodyParser.json());

// // Use CORS middleware with the specified options
// // app.use(cors(corsOptions));
// // app.use(bodyParser.json());

// // Routes
// app.get("/", (request, res) => {
//   res.send("Hello");
// });

// // Your existing gold rates and chart data routes...
// app.get("/gold-rates", goldRatesRouter);
// app.get("/chart-data", (req, res) => {
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     dataPoints: [100, 110, 105, 115, 120],
//   };
//   res.json(chartData);
// });

// // Authentication routes
// const users = [
//   { id: 1, username: "user", password: "password" },
//   // Add more users as needed
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.json({ user: user.username });
//   } else {
//     res.status(401).json({ message: "Invalid username or password" });
//   }
// });

// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (users.some((u) => u.username === username)) {
//     res.status(400).json({ message: "Username already exists" });
//   } else {
//     const newUser = { id: users.length + 1, username, password };
//     users.push(newUser);
//     res.json({ user: newUser.username });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const goldRatesRouter = require("./routes/goldRates");
// const mongoose = require("./db"); // Import the MongoDB connection

// const app = express();

// // Middleware
// const corsOptions = {
//   origin: "https://voluble-cranachan-9883e5.netlify.app",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// // Routes
// app.get("/", (request, res) => {
//   res.send("Hello");
// });

// // Your existing gold rates and chart data routes...
// app.get("/gold-rates", goldRatesRouter);
// app.get("/chart-data", (req, res) => {
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     dataPoints: [100, 110, 105, 115, 120],
//   };
//   res.json(chartData);
// });

// // Authentication routes
// const users = [
//   { id: 1, username: "user", password: "password" },
//   // Add more users as needed
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.json({ user: user.username });
//   } else {
//     res.status(401).json({ message: "Invalid username or password" });
//   }
// });

// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (users.some((u) => u.username === username)) {
//     res.status(400).json({ message: "Username already exists" });
//   } else {
//     const newUser = { id: users.length + 1, username, password };
//     users.push(newUser);
//     res.json({ user: newUser.username });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const goldRatesRouter = require("./routes/goldRates");
// const mongoose = require("./db"); // Import the MongoDB connection

// const app = express();

// // Middleware with specific CORS options
// const corsOptions = {
//   origin: "https://voluble-cranachan-9883e5.netlify.app",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// // Routes
// app.get("/", (request, res) => {
//   res.send("Hello");
// });

// // Your existing gold rates and chart data routes...
// app.get("/gold-rates", goldRatesRouter);
// app.get("/chart-data", (req, res) => {
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     dataPoints: [100, 110, 105, 115, 120],
//   };
//   res.json(chartData);
// });

// // Authentication routes
// const users = [
//   { id: 1, username: "user", password: "password" },
//   // Add more users as needed
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.json({ user: user.username });
//   } else {
//     res.status(401).json({ message: "Invalid username or password" });
//   }
// });

// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (users.some((u) => u.username === username)) {
//     res.status(400).json({ message: "Username already exists" });
//   } else {
//     const newUser = { id: users.length + 1, username, password };
//     users.push(newUser);
//     res.json({ user: newUser.username });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const goldRatesRouter = require("./routes/goldRates");
const mongoose = require("./db"); // Import the MongoDB connection

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (request, res) => {
  res.send("Hello");
});

// Your existing gold rates and chart data routes...
app.get("/gold-rates", goldRatesRouter);
app.get("/chart-data", (req, res) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    dataPoints: [100, 110, 105, 115, 120],
  };
  res.json(chartData);
});

// Authentication routes
const users = [
  { id: 1, username: "user", password: "password" },
  // Add more users as needed
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ user: user.username });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (users.some((u) => u.username === username)) {
    res.status(400).json({ message: "Username already exists" });
  } else {
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    res.json({ user: newUser.username });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
