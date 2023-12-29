const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class FieldError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(field, message) {
    super(message);
    this.field = field;
    this.message = message;
  }

  serializeErrors() {
    return [{ field: this.field, message: this.message }];
  }
}

module.exports = FieldError;
