const express = require('express');
const router = express.Router();
const advertController = require('../controllers/advertController');

// GET all adverts
router.get('/', advertController.getAllAdverts);

// GET a single advert
router.get('/:id', advertController.getAdvertById);

// POST create a new advert
router.post('/', advertController.createAdvert);

// PUT update an advert
router.put('/:id', advertController.updateAdvert);

// DELETE an advert
router.delete('/:id', advertController.deleteAdvert);

// GET adverts by type (buy, sell, forwarder)
router.get('/type/:type', advertController.getAdvertsByType);

// GET adverts by user
router.get('/user/:userId', advertController.getAdvertsByUser);

module.exports = router;
