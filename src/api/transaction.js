const { Router } = require('express');
const {
  createTransaction,
  getTransaction,
} = require('../controllers/TransactionController');
const {
  transactionCreationValidator,
  getTransactionValidator,
} = require('../middlewares/validators/transaction');

const router = Router();

router.post('/', transactionCreationValidator, createTransaction);
router.get('/:transactionId', getTransactionValidator, getTransaction);

module.exports = router;
