const BadRequestError = require('../../utils/errors/bad-request-error');

const login = async (req, res, next) => {
  if (!req.email) throw new BadRequestError('Email is required');
  if (!req.password) throw new BadRequestError('Password is required');
  next();
};

const register = async (req, res, next) => {
  if (!req.firstName) throw new BadRequestError('First name is required');
  if (!req.lastName) throw new BadRequestError('Last name is required');
  if (!req.email) throw new BadRequestError('Email is required');
  if (!req.password) throw new BadRequestError('Password is required');
  if (!req.SSN) throw new BadRequestError('SSN is required');
  if (!req.address) throw new BadRequestError('Address is required');
  if (!req.phoneNumber) throw new BadRequestError('Phone number is required');
  next();
};

module.exports = {
  login,
  register,
};
