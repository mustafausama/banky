const { Router } = require('express');
const { changeUser, showUserInfo } = require('../controllers/UserController');
const { changeUserValidator } = require('../middlewares/validators/user');
const authMiddleware = require('../middlewares/authMiddleware');
const router = Router();

router.put('/', authMiddleware, changeUserValidator, changeUser);
router.get('/user-info', authMiddleware, showUserInfo);

module.exports = router;
