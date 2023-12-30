const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const getAllCurrencies = async (req, res) => {
  const currencies = await client.currency.findMany();
  res.status(200).json(currencies);
};

module.exports = {
  getAllCurrencies,
};
