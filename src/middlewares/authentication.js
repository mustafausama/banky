const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const NotAuthorizedError = require('../utils/errors/not-authorized-error');

const prisma = new PrismaClient();

const authenticate = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    throw new NotAuthorizedError();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new NotAuthorizedError();
    }

    req.user = user;

    next();
  } catch (error) {
    throw new NotAuthorizedError();
  }
};

module.exports = authenticate;
