const { Router } = require('express');
const {
  getAllReviews,
  createReview,
} = require('../controllers/ReviewController');
const { reviewCreationValidator } = require('../middlewares/validators/review');

const router = Router();

router.get('/all', getAllReviews);
router.post('/', reviewCreationValidator, createReview);

module.exports = router;
