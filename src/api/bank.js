const { Router } = require('express');
const { getBanks } = require('../controllers/BankController');
const router = Router();

router.get('/', getBanks);

module.exports = router;
