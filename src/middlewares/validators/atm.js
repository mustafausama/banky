const validator = require('validator');
const BadRequestError = require('../../utils/errors/bad-request-error');

const nearestATMValidator = async (req, res, next) => {
  const { latitude, longitude } = req.params;

  if (latitude !== undefined && !validator.isFloat(latitude)) {
    throw new BadRequestError('Latitude must be a float');
  }

  if (longitude !== undefined && !validator.isFloat(longitude)) {
    throw new BadRequestError('Longitude must be a float');
  }

  if (
    (latitude === undefined && longitude !== undefined) ||
    (latitude !== undefined && longitude === undefined)
  ) {
    throw new BadRequestError('Both latitude and longitude must be provided');
  }

  next();
};

module.exports = {
  nearestATMValidator,
};
