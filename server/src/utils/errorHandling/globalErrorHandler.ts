import { ErrorRequestHandler } from 'express';
import { ErrorResponse } from './ErrorResponse';
import { AppError } from './AppError';

export const globalErrorHandler: ErrorRequestHandler<any, ErrorResponse> = (
  err,
  req,
  res,
  next
) => {
  const appError = err as AppError;
  const message = appError.message;
  const status = appError.statusCode || 500;

  res.status(status);
  res.json({
    message,
    status
  });
};
