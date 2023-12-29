const { Router } = require('express');
const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/auth/AuthController');
const {
  registerValidator,
  loginValidator,
} = require('../middlewares/validators/auth');
const authMiddleware = require('../middlewares/authMiddleware');
const router = Router();

router.post('/register', registerValidator, registerController);
router.post('/login', loginValidator, loginController);
router.post('/logout', authMiddleware, logoutController);

module.exports = router;
