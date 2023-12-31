const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const NotAuthorizedError = require('../utils/errors/not-authorized-error');

const prisma = new PrismaClient();

const authMiddleware = async (req, res, next) => {
  const isTokenAttached = req.cookies.isTokenAttached;
  const token = req.cookies.token;

  if (!isTokenAttached || !token) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'prod',
      sameSite: 'strict',
    });

    res.clearCookie('isTokenAttached', {
      secure: process.env.NODE_ENV === 'prod',
      sameSite: 'strict',
    });

    throw new NotAuthorizedError();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { SSN: decoded.SSN },
      select: { SSN: true },
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

module.exports = authMiddleware;
