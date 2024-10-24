const mongoose = require('mongoose');

const platformDataSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: mongoose.Schema.Types.Mixed,
  // Example fields:
  // advertExpirationDays: { type: Number, default: 30 },
  // transactionFeePercentage: { type: Number, default: 2.5 },
}, { timestamps: true });

module.exports = mongoose.model('PlatformData', platformDataSchema);
