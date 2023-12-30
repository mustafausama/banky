const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const getBanks = async (req, res) => {
  const banks = await client.bank.findMany({
    select: {
      swiftcode: true,
      branchName: true,
      _count: {
        select: { bankAccounts: true },
      },
    },
  });
  return res.json(banks);
};

module.exports = {
  getBanks,
};
