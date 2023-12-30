const { Router } = require('express');
const { createLoan, getLoan } = require('../controllers/LoanController');
const {
  loanCreationValidator,
  getLoanValidator,
} = require('../middlewares/validators/loan');

const router = Router();

router.post('/', loanCreationValidator, createLoan);
router.get('/:cardNumber', getLoanValidator, getLoan);

module.exports = router;
