const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BadRequestError = require('../../utils/errors/bad-request-error');
const { Logger } = require('winston');

const prisma = new PrismaClient();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const pepper = process.env.PEPPER;
  return bcrypt.hash(password + pepper, salt);
};

const register = async (req, res) => {
  const { name, email, password, SSN } = req.body;

  if (await prisma.user.findUnique({ where: { email } })) {
    throw new BadRequestError('Email already exists');
  }
  // Hash the password using the private function
  const hashedPassword = await hashPassword(password);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        SSN,
      },
    });
    return res.json(user);
  } catch (error) {
    Logger.error(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new BadRequestError('User does not exist');
  }

  // Compare the entered password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(
    password + process.env.PEPPER,
    user.password
  );

  if (!isPasswordValid) {
    throw new BadRequestError('Invalid password');
  }

  // Create and sign a JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.json({ message: 'Login successful', user, token });
};

module.exports = {
  register,
  login,
};
