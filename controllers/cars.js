const Car = require('../models/car')

// 1. POST a car to the database
module.exports ={
    addCar,
    getAllCars
} 

function addCar (req, res) {
    try {
        Car.create(req.body)
        .then(car => res.status(200).json(car))
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
} 


// 2. GET all cars saved by user

function getAllCars(req, res) {
    try {
        Car.find({}).then(function(car) {
            res.status(200).json(car);
        });
    } catch (err) {
        console.log(err)
    }
}