const { PrismaClient } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');
const client = new PrismaClient();

const createCard = async (req, res) => {
  const { cardNumber, cvv, expiryDate, accountNumber } = req.body;
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

  const card = await client.card.findUnique({
    where: {
      cardNumber,
    },
  });
  if (card) {
    throw new BadRequestError('Card already exists');
  }

  const newCard = await client.card.create({
    data: {
      cardNumber,
      cvv,
      expiryDate,
      accountNumber,
    },
  });
  res.status(201).json(newCard);
};

const getCard = async (req, res) => {
  const { cardNumber } = req.params;
  const { SSN } = req.user;
  const card = await client.card.findUnique({
    where: {
      cardNumber,
    },
  });
  if (!card) {
    throw new BadRequestError('Card does not exist');
  }
  const bankAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber: card.accountNumber,
    },
  });
  if (!bankAccount || bankAccount.SSN !== SSN)
    throw new BadRequestError('Card does not belong to user');

  res.status(200).json(card);
};

module.exports = {
  createCard,
  getCard,
};
