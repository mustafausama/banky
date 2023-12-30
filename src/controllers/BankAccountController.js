const { PrismaClient, AccountType } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');

const client = new PrismaClient();

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

const showAccountDetails = async (req, res) => {
  const { SSN } = req.user;
  const { num: accountNumber } = req.params;
  const bankAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber,
    },
    select: {
      accountNumber: true,
      accountType: true,
      swiftcode: true,
      balance: true,
      SSN: true,
      bank: {
        select: {
          branchName: true,
        },
      },
      sendingTransactions: {
        select: {
          transactionId: true,
          date: true,
          createdAt: true,
          amount: true,
        },
        take: 10,
      },
      receivingTransactions: {
        select: {
          transactionId: true,
          date: true,
          createdAt: true,
          amount: true,
        },
        take: 10,
      },
      cards: {
        select: {
          cardId: true,
          cardNumber: true,
          expiryDate: true,
        },
      },
    },
  });
  if (!bankAccount) {
    throw new BadRequestError('Bank account does not exist');
  }
  if (bankAccount.SSN !== SSN) {
    throw new BadRequestError('Bank account does not belong to user');
  }
  res.status(200).json(bankAccount);
};

module.exports = {
  addBankAccount,
  showAccountDetails,
};
