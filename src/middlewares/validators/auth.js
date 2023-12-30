const ValidationError = require('../../utils/errors/validation-error');
const validator = require('validator').default;

const registerValidator = async (req, res, next) => {
  const errors = [];
  if (!req.body.firstName) errors.firstName = 'First name is required';
  else if (
    !validator.isAlpha(req.body.firstName) ||
    !validator.isLength(req.body.firstName, { min: 1 })
  )
    errors.firstName = 'First name is invalid';

  if (!req.body.lastName) errors.lastName = 'Last name is required';
  else if (
    !validator.isAlpha(req.body.lastName) ||
    !validator.isLength(req.body.lastName, { min: 1 })
  )
    errors.lastName = 'Last name is invalid';

  if (!req.body.email) errors.email = 'Email is required';
  else if (!validator.isEmail(req.body.email))
    errors.email = 'Email is invalid';

  if (!req.body.password) errors.password = 'Password is required';
  else if (!validator.isStrongPassword(req.body.password))
    errors.password = 'Password is invalid';

  if (!req.body.SSN) errors.SSN = 'SSN is required';
  else if (!validator.isNumeric(req.body.SSN)) errors.SSN = 'SSN is invalid';

  if (!req.body.address) errors.address = 'Address is required';
  else if (!validator.isLength(req.body.address, { min: 1 }))
    errors.address = 'Address is invalid';

  if (!req.body.phoneNumber) errors.phoneNumber = 'Phone number is required';
  else if (!validator.isMobilePhone(req.body.phoneNumber))
    errors.phoneNumber = 'Phone number is invalid';

  if (Object.keys(errors).length > 0)
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );

  next();
};

const loginValidator = async (req, res, next) => {
  const errors = [];
  if (!req.body.email) errors.email = 'Email is required';
  else if (!validator.isEmail(req.body.email))
    errors.email = 'Email is invalid';

  if (!req.body.password) errors.password = 'Password is required';
  else if (!validator.isStrongPassword(req.body.password))
    errors.password = 'Password is invalid';

  if (Object.keys(errors).length > 0)
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );

  next();
};

module.exports = {
  registerValidator,
  loginValidator,
};
