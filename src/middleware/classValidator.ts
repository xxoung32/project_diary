import { NextFunction, Request, Response } from "express";
import { validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";

export function validateBody(schema: { new (): any }) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const target = plainToClass(schema, req.body);
    try {
      await validateOrReject(target);
      next();
    } catch (error: any) {
      const errorMessages = error.map((error: any) => {
        return `${error.property}을 확인하세요!`;
      });
      const errorMessage = errorMessages.join(" & ");
      res.status(400).json({ error: errorMessage });
    }
  };
}
