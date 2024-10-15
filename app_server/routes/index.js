const express = require('express');
const router = express.Router();
const ctrlLocations = 
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/menu', ctrlOthers.menu);
router.get('/ambience', ctrlOthers.ambience);
router.get('/contact', ctrlOthers.contact);
router.get('/pizza', ctrlOthers.pizza);
router.get('/continental', ctrlOthers.continental);
router.get('/italian', ctrlOthers.italian);
router.get('/sandwich', ctrlOthers.sandwich);
router.get('/beverages', ctrlOthers.beverages);
module.exports = router;