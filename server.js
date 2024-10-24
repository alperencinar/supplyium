require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// Import the auth middleware at the top
const auth = require('./middleware/auth');

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Error handling for after initial connection
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

// ... rest of your Express.js setup (middleware, routes, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ... other imports and setup
app.use('/api/auth', require('./routes/auth'));

// Protected route example
app.get('/api/protected', auth, (req, res) => {
  res.json({ msg: 'This is a protected route' });
});
