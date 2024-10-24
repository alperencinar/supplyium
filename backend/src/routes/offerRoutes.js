const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');

// GET all offers
router.get('/', offerController.getAllOffers);

// GET a single offer
router.get('/:id', offerController.getOfferById);

// POST create a new offer
router.post('/', offerController.createOffer);

// PUT update an offer
router.put('/:id', offerController.updateOffer);

// DELETE an offer
router.delete('/:id', offerController.deleteOffer);

// GET offers for a specific advert
router.get('/advert/:advertId', offerController.getOffersByAdvert);

// GET offers by user
router.get('/user/:userId', offerController.getOffersByUser);

module.exports = router;
