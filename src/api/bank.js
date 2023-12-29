const { Router } = require('express');
const {
  addBank,
  addTeller,
  removeTeller,
} = require('../controllers/bank/BankController');
const router = Router();

router.post('/add-bank', addBank);
router.post('/add-teller', addTeller);
router.post('/remove-teller', removeTeller);

module.exports = router;
