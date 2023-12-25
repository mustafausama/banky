const { Router } = require('express');
const auth = require('./auth');
const account = require('./account');
const bank = require('./bank');

const router = Router();

router.use('/auth', auth);
router.use('/account', account);
router.use('/bank', bank);

module.exports = router;
