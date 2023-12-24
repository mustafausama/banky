class CustomError extends Error {
  statusCode;
  // Abstract class
  constructor(message) {
    super(message);
    if (this.constructor == CustomError) {
      throw new Error('Abstract class cannot be instantiated directly');
    }
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
    else this.__proto__ = actualProto;
  }
  // Abstract method
  serializeErrors() {
    if (this.constructor == CustomError) {
      throw new Error('Abstract Method cannot be called directly');
    }
  }
}

module.exports = CustomError;
