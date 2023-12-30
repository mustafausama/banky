const { Router } = require('express');
const { getNotifications } = require('../controllers/NotificationController');

const router = Router();

router.get('/', getNotifications);
