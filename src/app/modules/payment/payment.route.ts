import express from 'express';
import { PaymentController } from './payment.controller';
const router = express.Router();
router.post('/', PaymentController.insertIntoDB);
export const paymentRoutes = router;
