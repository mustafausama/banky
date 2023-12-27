const { Router } = require('express');
const {
  showDashboard,
} = require('../../controllers/dashboard/DashboardController');

const router = Router();

router.get('/', showDashboard);
