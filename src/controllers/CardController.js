const { PrismaClient } = require('@prisma/client');
const BadRequestError = require('../utils/errors/bad-request-error');
const client = new PrismaClient();

const generateCardNumber = () => {
  const cardNumber = Math.floor(
    Math.random() * 9000000000000000 + 1000000000000000
  );
  return cardNumber;
};

const createCard = async (req, res) => {
  const { accountNumber } = req.body;
  const { SSN } = req.user;

  let cardNumber;
  let existingCard;

  do {
    cardNumber = generateCardNumber();
    existingCard = await client.card.findUnique({
      where: {
        cardNumber: cardNumber.toString(),
      },
    });
  } while (existingCard);

  const cvv = Math.floor(Math.random() * 900 + 100);

  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 5);

  const bankAccount = await client.bankAccount.findUnique({
    where: {
      accountNumber: parseInt(accountNumber),
    },
  });
  if (!bankAccount) {
    throw new BadRequestError('Bank account does not exist');
  }
  if (bankAccount.SSN !== SSN) {
    throw new BadRequestError('Bank account does not belong to user');
  }

  const newCard = await client.card.create({
    data: {
      cardNumber: cardNumber.toString(),
      cvv: cvv.toString(),
      expiryDate,
      accountNumber: parseInt(accountNumber),
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
