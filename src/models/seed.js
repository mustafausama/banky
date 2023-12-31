require('../config/env-init');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword } = require('../utils/hashing');

const password = 'Hello@123';

async function main() {
  const users = await prisma.user.findMany({
    select: {
      SSN: true,
    },
  });
  if (!users.length) {
    return;
  }
  for (let i = 0; i < users.length; i++) {
    const SSN = users[i].SSN;
    const hashedPassword = await hashPassword(password);
    await prisma.user.update({
      where: {
        SSN,
      },
      data: {
        password: hashedPassword,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
