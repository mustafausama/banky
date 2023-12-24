const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class NotAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  reason = 'Authorization is required.';

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

module.exports = NotAuthorizedError;
