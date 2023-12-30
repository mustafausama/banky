const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class ValidationError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(errors) {
    const message = 'Validation Error';
    super(message);
    this.message = message;
    this.errors = errors;
  }

  serializeErrors() {
    return [{ message: this.message, fields: this.errors }];
  }
}

module.exports = ValidationError;
