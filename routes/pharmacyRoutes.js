const express = require('express');
const router = express.Router();

const pharmacyController = require('./../controllers/pharmacyController');

router.route('/')
      .post(pharmacyController.createPharmacy);

module.exports = router;      