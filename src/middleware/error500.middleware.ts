import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';

const errorMiddleware500 = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Упс...';
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware500;
