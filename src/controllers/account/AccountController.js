const { PrismaClient, AccountType } = require('@prisma/client');
const { hashPassword } = require('../../utils/hashing');
const client = new PrismaClient();
const BadRequestError = require('../../utils/errors/bad-request-error');

const changeName = async (req, res) => {
  const { firstName, lastName } = req.body;
  const { SSN } = req.user;

  await client.user.update({
    where: {
      SSN: SSN,
    },
    data: {
      firstName,
      lastName,
    },
  });
  res.sendStatus(200);
};

const changeEmail = async (req, res) => {
  const { email } = req.body;
  const { SSN } = req.user;

  if (await client.user.findUnique({ where: { email: email } })) {
    throw new BadRequestError('Email already exists');
  }
  await client.user.update({
    where: {
      SSN: SSN,
    },
    data: {
      email,
    },
  });
  res.sendStatus(200);
};

const changePassword = async (req, res) => {
  const { password } = req.body;
  const { SSN } = req.user;
  const hashedPassword = await hashPassword(password);
  await client.user.update({
    where: {
      SSN: SSN,
    },
    data: {
      password: hashedPassword,
    },
  });
  res.sendStatus(200);
};

const changeAddress = async (req, res) => {
  const { address } = req.body;
  const { SSN } = req.user;
  await client.user.update({
    where: {
      SSN: SSN,
    },
    data: {
      address,
    },
  });
  res.sendStatus(200);
};

const changePhone = async (req, res) => {
  const { phoneNumber } = req.body;
  const { SSN } = req.user;
  await client.user.update({
    where: {
      SSN: SSN,
    },
    data: {
      phoneNumber,
    },
  });
  res.sendStatus(200);
};

const addBankAccount = async (req, res) => {
  const { balance, swiftcode, accountType } = req.body;
  const { SSN } = req.user;

  if (
    !(await client.bank.findUnique({
      where: {
        swiftcode,
      },
    }))
  ) {
    throw new BadRequestError('Bank does not exist');
  }

  const bankAccount = await client.bankAccount.create({
    data: {
      balance,
      SSN: SSN,
      swiftcode,
      accountType: AccountType[accountType],
    },
  });
  if (!bankAccount) {
    throw new BadRequestError('Bank account could not be created');
  }
  res.status(201).json(bankAccount);
};

const showUserInfo = async (req, res) => {
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
      bankAccounts: {
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
  changeName,
  changeEmail,
  changePassword,
  changeAddress,
  changePhone,
  addBankAccount,
  showUserInfo,
};
