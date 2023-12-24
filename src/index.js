const app = require('./app');
const checkEnvVars = require('./config/check-env-vars');
const MissingEnvError = require('./utils/errors/missing-env-error');
const Logger = require('./utils/logger');
require('dotenv').config();

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    checkEnvVars();
    app.listen(port, () => {
      Logger.info(`Server is running on port ${port}`);
    });
  } catch (err) {
    if (err instanceof MissingEnvError) Logger.error(err.message);
    // eslint-disable-next-line no-console
    else Logger.error(err);
    process.exit(1);
  }
};

start();
