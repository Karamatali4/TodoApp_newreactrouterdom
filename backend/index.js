require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const router = require('./Route/userRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(
    cors({
      origin: process.env.BASE_URL || process.env.FRONTENDURL,
      credentials: true,
      methods: "PUT,POST,GET,DELETE,PATCH,HEAD",
    })
  );

  app.get("/",(req,res) => {
    res.send("Hello");
  });
// Routes
app.use(router);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
