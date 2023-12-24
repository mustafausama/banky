const MissingEnvError = require('../utils/errors/missing-env-error');

const checkEnvVars = () => {
  if (!process.env.PORT) {
    throw new MissingEnvError('PORT');
  }
};

module.exports = checkEnvVars;
