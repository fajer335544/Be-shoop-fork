const Pharmacy = require('./../models/pharmacyModel');

exports.createPharmacy = async (req, res, next) => {
  const pharmacy = await Pharmacy.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      pharmacy
  }
})
}