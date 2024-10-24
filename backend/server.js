const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();

// Import models
const User = require('./models/User');
const Advert = require('./models/Advert');
const Offer = require('./models/Offer');

const app = express();

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Supplyium API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
