const validator = require('validator');
const ValidationError = require('../../utils/errors/validation-error');

const reviewCreationValidator = async (req, res, next) => {
  const { rating, message } = req.body;
  let errors = {};

  if (!rating) errors.rating = 'Rating is required';
  else if (!validator.isInt(rating, { min: 1, max: 5 }))
    errors.rating = 'Rating must be an integer between 1 and 5';

  if (!message) errors.message = 'Message is required';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

module.exports = {
  reviewCreationValidator,
};
