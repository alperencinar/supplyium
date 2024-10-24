const Advert = require('../models/Advert');

// Get all adverts
exports.getAllAdverts = async (req, res) => {
  try {
    const adverts = await Advert.find();
    res.status(200).json(adverts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adverts', error: error.message });
  }
};

// Get a single advert by ID
exports.getAdvertById = async (req, res) => {
  try {
    const advert = await Advert.findById(req.params.id);
    if (!advert) {
      return res.status(404).json({ message: 'Advert not found' });
    }
    res.status(200).json(advert);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching advert', error: error.message });
  }
};

// Create a new advert
exports.createAdvert = async (req, res) => {
  try {
    const newAdvert = new Advert(req.body);
    const savedAdvert = await newAdvert.save();
    res.status(201).json(savedAdvert);
  } catch (error) {
    res.status(400).json({ message: 'Error creating advert', error: error.message });
  }
};

// Update an advert
exports.updateAdvert = async (req, res) => {
  try {
    const updatedAdvert = await Advert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAdvert) {
      return res.status(404).json({ message: 'Advert not found' });
    }
    res.status(200).json(updatedAdvert);
  } catch (error) {
    res.status(400).json({ message: 'Error updating advert', error: error.message });
  }
};

// Delete an advert
exports.deleteAdvert = async (req, res) => {
  try {
    const deletedAdvert = await Advert.findByIdAndDelete(req.params.id);
    if (!deletedAdvert) {
      return res.status(404).json({ message: 'Advert not found' });
    }
    res.status(200).json({ message: 'Advert deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting advert', error: error.message });
  }
};

// Get adverts by type
exports.getAdvertsByType = async (req, res) => {
  try {
    const adverts = await Advert.find({ type: req.params.type });
    res.status(200).json(adverts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adverts by type', error: error.message });
  }
};

// Get adverts by user
exports.getAdvertsByUser = async (req, res) => {
  try {
    const adverts = await Advert.find({ user: req.params.userId });
    res.status(200).json(adverts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adverts by user', error: error.message });
  }
};
