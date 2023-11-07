import { Request, Response } from 'express';
import { PaymentService } from './payment.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await PaymentService.initPayment();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result
  });
};
export const PaymentController = {
  insertIntoDB
};
