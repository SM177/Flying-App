const AsyncHandler = require('express-async-handler');
const Flights = require('../Model/flightModal')

// get posting
const getFlights = AsyncHandler(async (req, res) => {
    const flights = await Flights.find()
    res.json(flights);
});

//  post posting
const postFlights = AsyncHandler(async (req, res) => {
    const {
        place,
        price
    } = req.body;
    if (!place || !price) {
        res.status(400)
        throw new Error('please enter all the fields')
    }

    const flight = await Flights.create({
        place,
        price
    });
    res.json(flight)
});


// update posting
const updatedFlights = AsyncHandler(async (req, res) => {
    const checkFlight = await Flights.findById(req.params.id)
    if (!checkFlight) {
        res.status(404);
        throw new Error('Flight not found')
    }
    const updatedFlights = await Flights.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.json(updatedFlights)
});


// delete posting
const deleteFlights = AsyncHandler(async (req, res) => {
    const checkFlight = await Flights.findById(req.params.id)
    if (!checkFlight) {
        res.status(404);
        throw new Error('Flight not found')
    }
    await Flights.deleteOne(checkFlight)
    res.json(checkFlight._id)
});


module.exports = {
    getFlights,
    postFlights,
    updatedFlights,
    deleteFlights
}