const { PrismaClient } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');
const client = new PrismaClient();

const createLoan = async (req, res) => {
  const { amount, startDate, endDate, accountNumber } = req.body;
  const { SSN } = req.user;

  // Calculate the interest rate based on the end date and the start date while giving higher interest rate for shorter loans
  const durationInYears =
    (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 24 / 365;
  const interestRate = Math.max(5, 30 - durationInYears);

  const bankAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber: Number(accountNumber),
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
      amount: parseFloat(amount),
      interestRate: interestRate,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      accountNumber: Number(accountNumber),
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
