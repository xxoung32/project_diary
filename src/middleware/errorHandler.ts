import { Request, Response, NextFunction } from "express";

const routerNotFoundHandler = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  (error as any).status = 404;
  next(error);
};

const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  const status = (err as any).status || 500;
  res.status(status);
  return res.json({
    error: `${status} ${err.message}`,
  });
};

export default { routerNotFoundHandler, errorHandler };
