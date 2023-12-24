const app = require('./app');
const Logger = require('./utils/logger');

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      Logger.info(`Server is running on port ${port}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    Logger.error(err);
    process.exit(1);
  }
};

start();
