const morgan = require('morgan');

const Logger = require('../utils/logger');

const stream = {
  write: (msg) => Logger.http(msg),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'dev';
  return env !== 'dev';
};

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

module.exports = morganMiddleware;
