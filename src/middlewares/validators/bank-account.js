const validator = require('validator');
const { AccountType } = require('@prisma/client');
const ValidationError = require('../../utils/errors/validation-error');

const addBankAccountValidator = async (req, res, next) => {
  const { balance, swiftcode, accountType } = req.body;
  let errors = {};

  if (!balance) errors.balance = 'Balance is required';
  else if (!validator.isFloat(balance))
    errors.balance = 'Balance must be an integer';
  else if (parseInt(balance) < 0) errors.balance = 'Balance must be positive';

  if (!swiftcode) errors.swiftcode = 'Swiftcode is required';
  else if (!validator.isLength(swiftcode, { min: 1 }))
    errors.swiftcode = 'Swiftcode is invalid';

  if (!accountType) errors.accountType = 'Account type is required';
  else if (!Object.values(AccountType).includes(accountType))
    errors.accountType = 'Account type is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

const showAccountDetailsValidator = async (req, res, next) => {
  const { num: accountNumber } = req.params;
  let errors = {};

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

module.exports = {
  addBankAccountValidator,
  showAccountDetailsValidator,
};
