const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoutes');
const advertRoutes = require('./routes/advertRoutes');
const offerRoutes = require('./routes/offerRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/adverts', advertRoutes);
app.use('/api/offers', offerRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Supplyium API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
