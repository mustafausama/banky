const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(message) {
    super(message);
    this.message = message;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = BadRequestError;
