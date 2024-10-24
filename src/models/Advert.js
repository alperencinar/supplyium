const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
  // Define your schema here
});

module.exports = mongoose.model('Advert', advertSchema);
