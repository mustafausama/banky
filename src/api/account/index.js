const { Router } = require('express');
const { changeName } = require('../../controllers/account/AccountController');
const router = Router();

router.post('/name', changeName);

module.exports = router;
