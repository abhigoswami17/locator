const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controller/locations.js');
const ctrlOthers = require('../controller/others.js');

//Location pages
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//Other pages
router.get('/about', ctrlOthers.about);

module.exports = router;
