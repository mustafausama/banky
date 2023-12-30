const { Router } = require('express');
const { getNearestATMs } = require('../controllers/ATMController');
const { nearestATMValidator } = require('../middlewares/validators/atm');

const router = Router();

router.get('/', nearestATMValidator, getNearestATMs);

module.exports = router;
