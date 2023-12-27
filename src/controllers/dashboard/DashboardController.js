const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const showDashboard = (req, res) => {
  client.user
    .findUnique({
      where: {
        ssn: req.body.ssn,
      },
    })
    .then((user) => {
      res.json(user);
    });
};

module.exports = {
  showDashboard,
};
