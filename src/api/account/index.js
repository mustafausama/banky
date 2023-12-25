const { Router } = require('express');
const {
  changeName,
  changeEmail,
  changePassword,
  changeAddress,
  changePhone,
    addBankAccount,
    showBankAccounts,
    showUserInfo,
} = require('../../controllers/account/AccountController');
const router = Router();

router.post('/name', changeName);
router.post('/email', changeEmail);
router.post('/password', changePassword);
router.post('/address', changeAddress);
router.post('/phone', changePhone);
router.post('/add-bank-account', addBankAccount);
router.get('/user-accounts', showBankAccounts);
router.get('/user-info', showUserInfo);

module.exports = router;
