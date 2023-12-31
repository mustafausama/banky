const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.use('/auth', require('./auth'));
router.use('/user', authMiddleware, require('./user'));
router.use('/bank', require('./bank'));
router.use('/bank-account', authMiddleware, require('./bank-account'));
router.use('/card', authMiddleware, require('./card'));
router.use('/loan', authMiddleware, require('./loan'));
router.use('/transaction', authMiddleware, require('./transaction'));
router.use('/review', require('./review'));
router.use('/atm', require('./atm'));
router.use('/currency', require('./currency'));
router.use('/notification', authMiddleware, require('./notification'));

module.exports = router;
