const validator = require('validator');
const ValidationError = require('../../utils/errors/validation-error');

const loanCreationValidator = async (req, res, next) => {
  const { amount, interestRate, startDate, endDate, accountNumber } = req.body;
  let errors = {};

  if (!amount) errors.amount = 'Amount is required';
  else if (!validator.isFloat(amount) || parseFloat(amount) < 0)
    errors.amount = 'Amount must be a positive float';

  if (!interestRate) errors.interestRate = 'Interest rate is required';
  else if (!validator.isFloat(interestRate) || parseFloat(interestRate) < 0)
    errors.interestRate = 'Interest rate must be a positive float';

  if (!startDate) errors.startDate = 'Start date is required';
  else if (!validator.isDate(startDate) || new Date(startDate) < new Date())
    errors.startDate = 'Start date is invalid';

  if (!endDate) errors.endDate = 'End date is required';
  else if (!validator.isDate(endDate) || new Date(endDate) < new Date())
    errors.endDate = 'End date is invalid';

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

const getLoanValidator = async (req, res, next) => {
  const { loanNumber } = req.params;
  let errors = {};

  if (!loanNumber) errors.loanNumber = 'Loan number is required';
  else if (!validator.isInt(loanNumber))
    errors.loanNumber = 'Loan number is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

module.exports = {
  loanCreationValidator,
  getLoanValidator,
};
