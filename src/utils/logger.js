const winston = require('winston');

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const level = () => {
  const env = process.env.NODE_ENV || 'dev';
  return env == 'dev' ? 'debug' : 'warn';
};

const format = [
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format((info) => {
    info.level = info.level.toUpperCase();

    if (typeof info.message === 'object') {
      info.message = JSON.stringify(info.message, null, 2);
    }

    return info;
  })(),
];

const rawLoggingFormat = [
  ...format,
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}] ${info.message}`
  ),
];

const colorizedLoggingFormat = [
  ...rawLoggingFormat,
  winston.format.colorize({ all: true }),
];

const transports = [
  new winston.transports.Console({
    level: level(),
    format: winston.format.combine(...colorizedLoggingFormat),
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: winston.format.combine(...rawLoggingFormat),
  }),
  new winston.transports.File({
    filename: 'logs/all.log',
    level: 'debug',
    format: winston.format.combine(...rawLoggingFormat),
  }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});

module.exports = Logger;
