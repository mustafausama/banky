const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const changeName = (req, res) => {
  client.user
    .update({
      where: {
        SSN: req.user.SSN,
      },
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    })
    .then((user) => {
      res.json(user);
    });
};
const changeEmail = (req, res) => {
  client.user
    .update({
      where: {
        SSN: req.user.SSN,
      },
      data: {
        email: req.body.email,
      },
    })
    .then((user) => {
      res.json(user);
    });
};
const changePassword = (req, res) => {
  client.user
    .update({
      where: {
        SSN: req.user.SSN,
      },
      data: {
        password: req.body.password,
      },
    })
    .then((user) => {
      res.json(user);
    });
};

const changeAddress = (req, res) => {
  client.user
    .update({
      where: {
        SSN: req.user.SSN,
      },
      data: {
        address: req.body.address,
      },
    })
    .then((user) => {
      res.json(user);
    });
};

const changePhone = (req, res) => {
  client.user
    .update({
      where: {
        SSN: req.user.SSN,
      },
      data: {
        phone: req.body.phone,
      },
    })
    .then((user) => {
      res.json(user);
    });
};

const addBankAccount = (req, res) => {
  const currentDateTime = new Date();
  client.bankAccount.create({
    data: {
      accountNumber: req.body.accountNumber,
      openingDate: currentDateTime,
      balance: req.body.balance,
      SSN: req.user.SSN,
      swiftcode: req.body.swiftcode,
    },
  })
    .then((account) => {
      res.json(account);
    });
};
const showBankAccounts = (req, res) => {
  client.bankAccount.findMany({
    where: {
      SSN: req.user.SSN,
    },
  })
    .then((accounts) => {
      res.json(accounts);
    });
};
const showUserInfo = (req, res) => {
  client.user.findUnique({
    where: {
      SSN: req.user.SSN,
    },
  })
    .then((user) => {
      res.json(user);
    });
};

module.exports = {
  changeName,
  changeEmail,
  changePassword,
  changeAddress,
  changePhone,
  addBankAccount,
  showBankAccounts,
  showUserInfo,
};
