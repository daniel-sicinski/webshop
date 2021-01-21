import { RequestHandler } from 'express';
import Joi from 'joi';
import { IProductsQueryParams } from '../models/IProductsQueryParams';
import { AppError } from '../../utils/errorHandling/AppError';

const schema = Joi.object({
  page: Joi.number()
    .min(1)
    .rule({ message: 'Page param must be a number greater than 0' })
    .required(),
  categoryId: Joi.number()
    .min(1)
    .rule({ message: 'CategoryId param must be a number greater than 0' }),
  sort: Joi.string()
    .pattern(new RegExp(/^(price-asc|price-desc|created_at-desc)$/))
    .rule({
      message:
        'Sort param must be one of: price-asc, price-desc, created_at-desc'
    }),
  filter: Joi.string()
    .pattern(new RegExp(/^(new|sale)$/))
    .rule({
      message: 'Filter param must be one of: new, sale'
    })
});

export const productsQueryValidator: RequestHandler<
  any,
  any,
  any,
  IProductsQueryParams
> = (req, res, next) => {
  const { error, value } = schema.validate(req.query);
  if (error) {
    next(new AppError(error.message, 400));
  } else {
    req.query = value;
    next();
  }
};
