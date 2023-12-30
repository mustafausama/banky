const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const getNearestATMs = async (req, res) => {
  const { latitude, longitude } = req.body;

  let query = {};
  if (latitude !== undefined && longitude !== undefined) {
    query = client.$queryRaw`
    SELECT *, 
           (6371 * acos(cos(radians(${latitude})) 
           * cos(radians(latitude)) 
           * cos(radians(longitude) 
           - radians(${longitude})) 
           + sin(radians(${latitude})) 
           * sin(radians(latitude)))) AS distance 
    FROM "ATM" 
    ORDER BY distance ASC
  `;
  } else {
    query = client.aTM.findMany();
  }

  const atms = await query;
  res.status(200).json(atms);
};

module.exports = {
  getNearestATMs,
};
