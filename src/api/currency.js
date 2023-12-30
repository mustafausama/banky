const { Router } = require('express');
const { getAllCurrencies } = require('../controllers/CurrencyController');

const router = Router();

router.get('/all', getAllCurrencies);

module.exports = router;
