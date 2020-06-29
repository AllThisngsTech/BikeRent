/* eslint-disable no-irregular-whitespace */
const express = require('express');
const router = express.Router();
const BikesController=require('../Controller/bike');

router.get('/',BikesController.rentals_get_all);
//routes for the rentals
router.post('/',BikesController.rentals_create_bike);
router.get('/:bikeId',BikesController.rental_getone); 

router.delete('/:bikeId',BikesController.delete_rental_one); //should be authenticated delete 
module.exports = router;

