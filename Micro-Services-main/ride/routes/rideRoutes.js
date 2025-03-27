const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const rideController = require('../controller/rideController')


router.post('/create-ride', authMiddleware.userAuth, rideController.createRide)
router.put('/accept-ride',authMiddleware.captainAuth, rideController.acceptRide)


module.exports = router;