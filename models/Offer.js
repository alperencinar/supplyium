const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  advert: { type: mongoose.Schema.Types.ObjectId, ref: 'Advert', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  // ... other offer-specific fields
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);
