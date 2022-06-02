import type { Request, Response, NextFunction } from "express";

export const middleware = (_: Request, __: Response, next: NextFunction) => {
  console.log("middleware running!");

  next();
};
