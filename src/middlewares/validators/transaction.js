const validator = require('validator');
const ValidationError = require('../../utils/errors/validation-error');

const transactionCreationValidator = async (req, res, next) => {
  const {
    amount,
    date,
    note,
    swiftcode,
    senderAccountNumber,
    recipientAccountNumber,
  } = req.body;
  let errors = {};

  if (!amount) errors.amount = 'Amount is required';
  else if (!validator.isFloat(amount) || parseFloat(amount) < 0)
    errors.amount = 'Amount must be a positive float';

  if ((date && !validator.isDate(date)) || new Date(date) < new Date())
    errors.date = 'Date is invalid';

  if (note && typeof note !== 'string' && !(note instanceof String))
    errors.note = 'Note is invalid';

  if (!swiftcode) errors.swiftcode = 'Swiftcode is required';
  else if (!validator.isLength(swiftcode, { min: 1 }))
    errors.swiftcode = 'Swiftcode is invalid';

  if (!senderAccountNumber)
    errors.senderAccountNumber = 'Sender account number is required';
  else if (!validator.isInt(senderAccountNumber))
    errors.senderAccountNumber = 'Sender account number is invalid';

  if (!recipientAccountNumber)
    errors.recipientAccountNumber = 'Recipient account number is required';
  else if (!validator.isInt(recipientAccountNumber))
    errors.recipientAccountNumber = 'Recipient account number is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

const getTransactionValidator = async (req, res, next) => {
  const { transactionId } = req.params;
  let errors = {};

  if (!transactionId) errors.transactionId = 'Transaction ID is required';
  else if (!validator.isInt(transactionId))
    errors.transactionId = 'Transaction ID is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

module.exports = {
  transactionCreationValidator,
  getTransactionValidator,
};
