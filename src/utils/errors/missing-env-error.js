const CustomError = require('./custom-error');

class MissingEnvError extends CustomError {
  constructor(envVarName) {
    const msg = `Missing environment variable: ${envVarName}`;
    super(msg);
    this.message = msg;
  }
}

module.exports = MissingEnvError;
