const MissingEnvError = require('../utils/errors/missing-env-error');

const checkEnvVars = () => {
  if (!process.env.PORT) {
    throw new MissingEnvError('PORT');
  }
  if (!process.env.DATABASE_URL) {
    throw new MissingEnvError('DATABASE_URL');
  }
};

module.exports = checkEnvVars;
