const { PrismaClient } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');
const client = new PrismaClient();

const createTransaction = async (req, res) => {
  const {
    amount,
    date,
    note,
    swiftcode,
    senderAccountNumber,
    recipientAccountNumber,
  } = req.body;
  const { SSN } = req.user;

  const senderAccount = await client.bankAccount.findUnique({
    where: { accountNumber: Number(senderAccountNumber) },
  });
  const recipientAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber: Number(recipientAccountNumber),
      swiftcode,
    },
  });
  if (!recipientAccount) {
    throw new BadRequestError('Recipient account does not exist');
  }
  if (!recipientAccount) {
    throw new BadRequestError('Recipient account does not exist');
  }
  if (senderAccount.SSN !== SSN) {
    throw new BadRequestError('Sender account does not belong to you');
  }
  if (String(senderAccount.accountNumber) === String(recipientAccountNumber)) {
    throw new BadRequestError('Cannot transfer to the same account');
  }
  if (senderAccount.balance < amount) {
    throw new BadRequestError('Not enough balance');
  }

  // Prisma $transaction to create the transaction, update the sender and recipient account, and send notification and return the created transaction entry in the transaction table

  const trans = await client.$transaction([
    client.transactions.create({
      data: {
        amount: parseFloat(amount),
        date: new Date(date || Date.now()),
        note,
        senderAccountNumber: Number(senderAccountNumber),
        recipientAccountNumber: Number(recipientAccountNumber),
      },
    }),
    client.bankAccount.update({
      where: { accountNumber: Number(senderAccountNumber) },
      data: { balance: parseFloat(senderAccount.balance) - parseFloat(amount) },
    }),
    client.bankAccount.update({
      where: { accountNumber: Number(recipientAccountNumber) },
      data: {
        balance: parseFloat(recipientAccount.balance) + parseFloat(amount),
      },
    }),
    client.notification.create({
      data: {
        SSN: recipientAccount.SSN,
        message: `You ${
          date ? 'will receive' : 'received'
        } ${amount} from ${senderAccountNumber} ${
          date ? `on ${new Date(date).toDateString()}` : 'now'
        }`,
      },
    }),
  ]);

  res.status(201).json(trans[0]);
};

const getTransaction = async (req, res) => {
  const { transactionId } = req.params;
  const { SSN } = req.user;
  const transaction = await client.transactions.findUnique({
    where: { transactionId: Number(transactionId) },
    select: {
      amount: true,
      date: true,
      note: true,
      createdAt: true,
      recipientAccountNumber: true,
      senderAccountNumber: true,
      senderBankAccount: {
        select: {
          SSN: true,
          user: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      recipientBankAccount: {
        select: {
          SSN: true,
          user: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  });

  if (!transaction) {
    throw new BadRequestError('Transaction does not exist');
  }
  if (
    transaction.senderBankAccount.SSN !== SSN &&
    transaction.recipientBankAccount.SSN !== SSN
  ) {
    throw new BadRequestError('Transaction does not belong to you');
  }

  res.status(200).json(transaction);
};

module.exports = {
  createTransaction,
  getTransaction,
};
