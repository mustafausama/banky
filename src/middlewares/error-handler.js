const { StatusCodes } = require('http-status-codes');
const CustomError = require('../utils/errors/custom-error');
const Logger = require('../utils/logger');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, _) => {
  if (err instanceof CustomError)
    return res
      .status(err.statusCode)
      .send({ status: err.statusCode, erros: err.serializeErrors() });
  Logger.error(err);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Internal server Error',
  });
};