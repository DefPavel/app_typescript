import { NextFunction, Request, Response } from 'express';

const errorMiddleware404 = (req: Request, res: Response, next: NextFunction) => {

    var err = new Error("Страница не найдена");
      res.status(404);
      next(err);
};

export default errorMiddleware404;