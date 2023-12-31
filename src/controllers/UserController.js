const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../utils/hashing');
const client = new PrismaClient();
const BadRequestError = require('../utils/errors/bad-request-error');

const changeUser = async (req, res) => {
  const { SSN } = req.user;
  const { firstName, lastName, email, password, address, phoneNumber } =
    req.body;

  let updateData = {};

  if (firstName) updateData.firstName = firstName;
  if (lastName) updateData.lastName = lastName;
  if (email) {
    const emailExists = await client.user.findUnique({ where: { email } });
    if (emailExists && emailExists.SSN !== SSN)
      throw new BadRequestError('Email already exists');
    updateData.email = email;
  }
  if (password) updateData.password = await hashPassword(password);
  if (address) updateData.address = address;
  if (phoneNumber) updateData.phoneNumber = phoneNumber;

  await client.user.update({ where: { SSN }, data: updateData });
  res.sendStatus(200);
};

const showUserInfo = async (req, res) => {
  const { includeAccounts } = req.query;

  const info = await client.user.findUnique({
    where: {
      SSN: req.user.SSN,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      address: true,
      phoneNumber: true,
      bankAccounts: includeAccounts === 'true' && {
        select: {
          balance: true,
          accountNumber: true,
          accountType: true,
          bank: {
            select: {
              swiftcode: true,
              branchName: true,
            },
          },
          _count: {
            select: {
              cards: true,
              loans: true,
            },
          },
        },
      },
    },
  });
  res.json(info);
};

module.exports = {
  changeUser,
  showUserInfo,
};
