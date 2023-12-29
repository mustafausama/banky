const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const pepper = process.env.PEPPER;
  return bcrypt.hash(password + pepper, salt);
};

const comparePassword = async (password, hashedPassword) => {
  const pepper = process.env.PEPPER;
  return bcrypt.compare(password + pepper, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
