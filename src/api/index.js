const { Router } = require('express');
const auth = require('./auth');
const account = require('./account');

const router = Router();

router.use('/auth', auth);
router.use('/account', account);

module.exports = router;
