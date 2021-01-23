import { RequestHandler } from 'express';

export const errorCatcher = (
  requestHandler: RequestHandler<any, any, any, any, any>
): RequestHandler<any, any, any, any, any> => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch(next);
};
