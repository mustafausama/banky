const MissingEnvError = require('../utils/errors/missing-env-error');

const checkEnvVars = () => {
  if (!process.env.PORT) {
    throw new MissingEnvError('PORT');
  }
  if (!process.env.DATABASE_URL) {
    throw new MissingEnvError('DATABASE_URL');
  }
  if (!process.env.PEPPER) {
    throw new MissingEnvError('PEPPER');
  }
};

module.exports = checkEnvVars;
