const express = require('express');
const router = express.Router();
const carCtrl = require('../../controllers/cars');

/*---------- Public Routes ----------*/

//router.get('/cars',carCtrl.getAllCars);


router.get('/', carCtrl.getAllCars);
router.post('/', carCtrl.addCar);

/*---------- Protected Routes ----------*/




module.exports = router;
