const { Router } = require('express');
const { createCard, getCard } = require('../controllers/CardController');
const {
  cardCreationValidator,
  showCardDetailsValidator,
} = require('../middlewares/validators/card');

const router = Router();

router.post('/', cardCreationValidator, createCard);
router.get('/:cardNumber', showCardDetailsValidator, getCard);

module.exports = router;
