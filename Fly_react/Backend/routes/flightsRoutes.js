const express = require('express');
const { getFlights, postFlights ,updatedFlights , deleteFlights } = require('../Controller/flightsController');
const router = express.Router();

router.route('/').get(getFlights).post(postFlights)
router.route('/:id').put(updatedFlights).delete(deleteFlights)


module.exports = router