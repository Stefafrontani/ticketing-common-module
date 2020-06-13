import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // We modify and console the error in case it is not catch in the previous if statement

  console.log(err);

  res.status(400).send({ errors: [{ message: "Something went wrong" }] });
};
