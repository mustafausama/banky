const { PrismaClient } = require('@prisma/client');
const { hashPassword, comparePassword } = require('../../utils/hashing');
const jwt = require('jsonwebtoken');
const BadRequestError = require('../../utils/errors/bad-request-error');

const prisma = new PrismaClient();

const registerController = async (req, res) => {
  const { firstName, lastName, email, password, SSN, address, phoneNumber } =
    req.body;

  const existing = await prisma.user.findMany({
    where: { OR: [{ email }, { SSN }] },
  });
  if (existing.some((user) => user.email === email)) {
    throw new BadRequestError('Email already exists');
  }
  if (existing.some((user) => user.SSN === SSN)) {
    throw new BadRequestError('SSN already exists');
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      SSN,
      address,
      phoneNumber,
    },
    select: {
      SSN: true,
    },
  });
  return res.json(user);
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      SSN: true,
      password: true,
    },
  });
  if (!user) {
    throw new BadRequestError('User does not exist');
  }

  // Compare the entered password with the stored hashed password
  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new BadRequestError('Invalid password');
  }

  // Create and sign a JWT token
  const token = jwt.sign({ SSN: user.SSN }, process.env.JWT_SECRET, {
    expiresIn: '1y',
  });
  // Set the token in an HTTP-only cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'prod',
    maxAge: 365 * 24 * 60 * 60 * 1000,
    sameSite: 'strict',
  });

  // Set an additional cookie flag to indicate the presence of a token
  res.cookie('isTokenAttached', 'true', {
    secure: process.env.NODE_ENV === 'prod',
    maxAge: 365 * 24 * 60 * 60 * 1000,
    sameSite: 'strict',
  });

  return res.json({ message: 'Login successful', user });
};

const logoutController = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'prod',
    sameSite: 'strict',
  });

  res.clearCookie('isTokenAttached', {
    secure: process.env.NODE_ENV === 'prod',
    sameSite: 'strict',
  });

  return res.json({ message: 'Logout successful' });
};

module.exports = {
  registerController,
  loginController,
  logoutController,
};
