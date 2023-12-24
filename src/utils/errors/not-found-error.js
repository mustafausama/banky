const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;

  constructor(message = 'Not found') {
    super(message);
    this.message = message;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotFoundError;
