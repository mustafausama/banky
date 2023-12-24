const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

export class DatabaseConnectionError extends CustomError {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  reason = 'Internal server error. Please try again later.';

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

module.exports = DatabaseConnectionError;
