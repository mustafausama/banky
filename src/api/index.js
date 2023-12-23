const { Router } = require('express');
const v1router = require('./v1.0');

const router = Router();

router.use('/v1', v1router);

module.exports = router;
