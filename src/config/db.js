const { PrismaClient } = require('@prisma/client');

let DB;

if (!global.__db) {
  global.__db = new PrismaClient();
}

DB = global.__db;

module.exports = DB;
