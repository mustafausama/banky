const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const addBank = (req, res) => {
  client.bank
    .create({
      data: {
        branchName: req.body.branchName,
        swiftcode: req.body.swiftcode,
        accountType: req.body.accountType,
      },
    })
    .then((bank) => {
      res.json(bank);
    });
};
const addTeller = (req, res) => {
  client.teller
    .create({
      data: {
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        swiftcode: req.body.swiftcode,
      },
    })
    .then((teller) => {
      res.json(teller);
    });
};

const removeTeller = (req, res) => {
  client.teller
    .delete({
      where: {
        id: req.body.id,
      },
    })
    .then(() => {
      res.json({ success: true });
    });
};

module.exports = {
  addBank,
  addTeller,
  removeTeller,
};
