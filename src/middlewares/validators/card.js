const validator = require('validator');
const ValidationError = require('../../utils/errors/validation-error');

const cardCreationValidator = async (req, res, next) => {
  const { cardNumber, cvv, expiryDate, accountNumber } = req.body;
  let errors = {};

  if (!cardNumber) errors.cardNumber = 'Card number is required';
  else if (!validator.isCreditCard(cardNumber))
    errors.cardNumber = 'Card number is invalid';

  if (!cvv) errors.cvv = 'CVV is required';
  else if (!validator.isLength(cvv, { min: 3, max: 3 }))
    errors.cvv = 'CVV is invalid';

  if (!expiryDate) errors.expiryDate = 'Expiry date is required';
  else if (!validator.isDate(expiryDate) || new Date(expiryDate) < new Date())
    errors.expiryDate = 'Expiry date is invalid';

  if (!accountNumber) errors.accountNumber = 'Account number is required';
  else if (!validator.isInt(accountNumber))
    errors.accountNumber = 'Account number is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

const showCardDetailsValidator = async (req, res, next) => {
  const { cardNumber } = req.params;
  let errors = {};

  if (!cardNumber) errors.cardNumber = 'Card number is required';
  else if (!validator.isCreditCard(cardNumber))
    errors.cardNumber = 'Card number is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

module.exports = {
  cardCreationValidator,
  showCardDetailsValidator,
};
