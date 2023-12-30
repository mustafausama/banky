const validator = require('validator');
const ValidationError = require('../../utils/errors/validation-error');
const BadRequestError = require('../../utils/errors/bad-request-error');

const changeUserValidator = async (req, res, next) => {
  const { firstName, lastName, email, password, address, phoneNumber } =
    req.body;
  let errors = {};

  // Validate firstName
  if (
    firstName &&
    (!validator.isAlpha(firstName) ||
      !validator.isLength(firstName, { min: 1 }))
  )
    errors.firstName = 'First name is invalid';

  // Validate lastName
  if (
    lastName &&
    (!validator.isAlpha(lastName) || !validator.isLength(lastName, { min: 1 }))
  )
    errors.lastName = 'Last name is invalid';

  // Validate email
  if (email && !validator.isEmail(email)) errors.email = 'Email is invalid';

  // Validate password
  if (password && !validator.isStrongPassword(password))
    errors.password = 'Password is weak';

  // Validate address
  if (address && !validator.isLength(address, { min: 1 }))
    errors.address = 'Address is invalid';

  // Validate phoneNumber
  if (phoneNumber && !validator.isMobilePhone(phoneNumber))
    errors.phoneNumber = 'Phone number is invalid';

  if (Object.keys(errors).length > 0) {
    throw new ValidationError(
      Object.keys(errors).map((key) => ({ field: key, message: errors[key] }))
    );
  }

  next();
};

const showUserInfoValidator = async (req, res, next) => {
  const { includeAccounts } = req.query;
  if (includeAccounts && !validator.isBoolean(includeAccounts)) {
    throw new BadRequestError('Invalid query parameter');
  }
  next();
};

module.exports = {
  changeUserValidator,
  showUserInfoValidator,
};
