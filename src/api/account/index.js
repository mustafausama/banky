const { Router } = require('express');
const { changeName, changeEmail, changePassword, changeAddress, changePhone, addBankAccount } = require('../../controllers/account/AccountController');
const router = Router();

router.post('/name', changeName);
router.post('/email', changeEmail);
router.post('/password', changePassword);
router.post('/address', changeAddress);
router.post('/phone', changePhone);
router.post('/add_bank_account', addBankAccount);


module.exports = router;
