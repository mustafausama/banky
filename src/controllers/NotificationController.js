const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const getNotifications = async (req, res) => {
  const { SSN } = req.user;
  const notifications = await client.notification.findMany({
    where: { SSN },
    orderBy: { date: 'desc' },
  });

  res.status(200).json(notifications);
};

exports.getNotifications = getNotifications;
