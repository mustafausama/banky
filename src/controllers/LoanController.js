const { PrismaClient } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');
const client = new PrismaClient();

const createLoan = async (req, res) => {
  const { amount, interestRate, startDate, endDate, accountNumber } = req.body;
  const { SSN } = req.user;

  const bankAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber,
    },
  });
  if (!bankAccount) {
    throw new BadRequestError('Bank account does not exist');
  }
  if (bankAccount.SSN !== SSN) {
    throw new BadRequestError('Bank account does not belong to user');
  }

  const newLoan = await client.loan.create({
    data: {
      amount,
      interestRate,
      startDate,
      endDate,
      accountNumber,
    },
  });

  res.status(201).json(newLoan);
};

const getLoan = async (req, res) => {
  const { loanNumber } = req.params;
  const { SSN } = req.user;
  const loan = await client.loan.findUnique({
    where: {
      loanNumber,
    },
  });
  if (!loan) {
    throw new BadRequestError('Loan does not exist');
  }
  const bankAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber: loan.accountNumber,
    },
  });
  if (!bankAccount || bankAccount.SSN !== SSN)
    throw new BadRequestError('Loan does not belong to user');

  res.status(200).json(loan);
};

module.exports = {
  createLoan,
  getLoan,
};
