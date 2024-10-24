const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
  type: { type: String, enum: ['buy', 'sell', 'forwarder'], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'active', 'closed'], default: 'pending' },
  // ... other fields specific to each advert type
}, { timestamps: true });

module.exports = mongoose.model('Advert', advertSchema);
