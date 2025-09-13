import express from 'express';
import HealthController from '../controllers/healthController.js';

const router = express.Router();

router.get('/healthz', HealthController.checkHealth);
router.all('/healthz', HealthController.handleUnsupportedMethod);

export default router;
