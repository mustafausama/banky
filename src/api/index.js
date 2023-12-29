const { Router } = require('express');
const auth = require('./auth');
const account = require('./account');
const bank = require('./bank');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.use('/auth', auth);
router.use('/account', authMiddleware, account);
// bank-account

router.use('/bank', bank);

module.exports = router;
