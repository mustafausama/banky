const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const getAllReviews = async (req, res) => {
  const reviews = await client.review.findMany({
    orderBy: {
      reviewId: 'desc',
    },
  });
  res.status(200).json(reviews);
};

const createReview = async (req, res) => {
  const { rating, message } = req.body;
  const newReview = await client.review.create({
    data: {
      rating: parseInt(rating),
      message,
    },
  });

  res.status(201).json(newReview);
};

module.exports = {
  getAllReviews,
  createReview,
};
