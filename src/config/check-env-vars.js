const MissingEnvError = require('../utils/errors/missing-env-error');

const checkEnvVars = () => {
  if (!process.env.PORT) {
    throw new MissingEnvError('PORT');
  }
  if(!process.env.POSTGRESQL_DB_URI) {
    throw new MissingEnvError('POSTGRESQL_DB_URI');
  }
};

module.exports = checkEnvVars;
