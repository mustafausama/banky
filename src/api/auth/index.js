const { Router } = require('express');
const AuthController = require('../../controllers/auth/AuthController');
const AuthValidator = require('../../middlewares/validator/auth');
const router = Router();

router.post('/register', AuthValidator.register, AuthController.register);
router.post('/login', AuthValidator.login, AuthController.login);

module.exports = router;
