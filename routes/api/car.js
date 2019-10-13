const express = require('express');
const router = express.Router();
const carCtrl = require('../../controllers/cars');

router.use(require('../../config/auth'));

/*---------- Public Routes ----------*/

//router.get('/cars',carCtrl.getAllCars);


router.get('/', carCtrl.getAllCars);
router.post('/', carCtrl.addCar);
router.delete('/car/:id', carCtrl.deletecar);

/*---------- Protected Routes ----------*/



function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }



module.exports = router;
