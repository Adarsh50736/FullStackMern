const express = require('express');
const router = express.Router();
const {
  subscribeToNewsletter,
  getAllSubscribers
} = require('../controllers/newsletterController');

// Routes
router.post('/', subscribeToNewsletter);
router.get('/', getAllSubscribers);

module.exports = router;
