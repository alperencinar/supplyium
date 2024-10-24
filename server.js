require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection
const mongoUri = process.env.MONGODB_URI.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Error handling for after initial connection
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

// ... rest of your Express.js setup (middleware, routes, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
