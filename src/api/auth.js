const { Router } = require('express');
const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/AuthController');
const {
  registerValidator,
  loginValidator,
} = require('../middlewares/validators/auth');
const router = Router();

router.post('/register', registerValidator, registerController);
router.post('/login', loginValidator, loginController);
router.post('/logout', logoutController);

module.exports = router;
