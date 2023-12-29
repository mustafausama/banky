const FieldError = require('../../utils/errors/field-error');
const validator = require('validator').default;

const registerValidator = async (req, res, next) => {
  if (!req.body.firstName)
    throw new FieldError('firstName', 'First name is required');
  if (!req.body.lastName)
    throw new FieldError('lastName', 'Last name is required');
  if (!req.body.email) throw new FieldError('email', 'Email is required');
  if (!req.body.password)
    throw new FieldError('password', 'Password is required');
  if (!req.body.SSN) throw new FieldError('SSN', 'SSN is required');
  if (!req.body.address) throw new FieldError('address', 'Address is required');
  if (!req.body.phoneNumber)
    throw new FieldError('phoneNumber', 'Phone number is required');

  if (
    !validator.isAlpha(req.body.firstName) ||
    !validator.isLength(req.body.firstName, { min: 1 })
  )
    throw new FieldError('firstName', 'First name is invalid');

  if (
    !validator.isAlpha(req.body.lastName) ||
    !validator.isLength(req.body.lastName, { min: 1 })
  )
    throw new FieldError('lastName', 'Last name is invalid');

  if (!validator.isEmail(req.body.email))
    throw new FieldError('email', 'Email is invalid');

  if (!validator.isStrongPassword(req.body.password))
    throw new FieldError(
      'password',
      'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one symbol'
    );

  if (!validator.isNumeric(req.body.SSN))
    throw new FieldError('SSN', 'SSN is invalid');

  if (
    !validator.isAlpha(req.body.address) ||
    !validator.isLength(req.body.address, { min: 1 })
  )
    throw new FieldError('address', 'Address is invalid');

  if (!validator.isMobilePhone(req.body.phoneNumber))
    throw new FieldError('phoneNumber', 'Phone number is invalid');

  next();
};

const loginValidator = async (req, res, next) => {
  if (!req.body.email) throw new FieldError('email', 'Email is required');
  if (!req.body.password)
    throw new FieldError('password', 'Password is required');
  next();
};

module.exports = {
  registerValidator,
  loginValidator,
};
