const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Import middleware
const errorHandler = require('./src/middleware/errorHandler');
const auth = require('./src/middleware/auth');
const requestLogger = require('./src/middleware/requestLogger');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const userRoutes = require('./src/routes/userRoutes');
const advertRoutes = require('./src/routes/advertRoutes');
const offerRoutes = require('./src/routes/offerRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/adverts', auth, advertRoutes); // Protected route
app.use('/api/offers', auth, offerRoutes); // Protected route

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Supplyium API' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
