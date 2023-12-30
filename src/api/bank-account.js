const { Router } = require('express');
const {
  addBankAccountValidator,
  showAccountDetailsValidator,
} = require('../middlewares/validators/bank-account');
const {
  addBankAccount,
  showAccountDetails,
} = require('../controllers/BankAccountController');

const router = Router();

router.post('/', addBankAccountValidator, addBankAccount);
router.get('/:num', showAccountDetailsValidator, showAccountDetails);

module.exports = router;
