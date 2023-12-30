const { PrismaClient } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');
const client = new PrismaClient();

const createTransaction = async (req, res) => {
  const { amount, date, note, senderAccountNumber, recipientAccountNumber } =
    req.body;
  const { SSN } = req.user;

  const senderAccount = await client.bankAccount.findUnique({
    where: { accountNumber: senderAccountNumber },
  });
  const recipientAccount = await client.bankAccount.findUnique({
    where: { accountNumber: recipientAccountNumber },
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
  if (senderAccount.accountNumber === recipientAccountNumber) {
    throw new BadRequestError('Cannot transfer to the same account');
  }
  if (senderAccount.balance < amount) {
    throw new BadRequestError('Not enough balance');
  }

  // Prisma $transaction to create the transaction, update the sender and recipient account, and send notification and return the created transaction entry in the transaction table

  await client.$transaction([
    client.transactions.create({
      data: {
        amount,
        date,
        note,
        senderAccountNumber,
        recipientAccountNumber,
      },
    }),
    client.bankAccount.update({
      where: { accountNumber: senderAccountNumber },
      data: { balance: parseFloat(senderAccount.balance) - parseFloat(amount) },
    }),
    client.bankAccount.update({
      where: { accountNumber: recipientAccountNumber },
      data: {
        balance: parseFloat(recipientAccount.balance) + parseFloat(amount),
      },
    }),
    client.notification.create({
      data: {
        SSN: recipientAccount.SSN,
        message: `You will receive ${amount} from ${senderAccountNumber} on ${date}`,
      },
    }),
  ]);

  res.status(201);
};

const getTransaction = async (req, res) => {
  const { transactionId } = req.params;
  const { SSN } = req.user;
  const transaction = await client.transaction.findUnique({
    where: { transactionId },
  });

  if (!transaction) {
    throw new BadRequestError('Transaction does not exist');
  }
  if (
    transaction.senderAccountNumber !== SSN &&
    transaction.recipientAccountNumber !== SSN
  ) {
    throw new BadRequestError('Transaction does not belong to you');
  }

  res.status(200).json(transaction);
};

module.exports = {
  createTransaction,
  getTransaction,
};
