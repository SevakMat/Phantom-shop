import {
  NextFunction, Request, RequestHandler, Response
} from 'express';
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import { BadRequest, UnauthorizedRequest } from '../errors';
import { logger } from '../logger';
import { ExtendedJwtPayload } from '../types';
import { Role } from '../models';

const getMessageFromJoiError = (error: Joi.ValidationError): string | undefined => {
  if (!error.details && error.message) {
    return error.message;
  }
  return error.details && error.details.length > 0 && error.details[0].message
    ? `PATH: [${error.details[0].path}] ;; MESSAGE: ${error.details[0].message}` : undefined;
};

interface HandlerOptions {
  validation?: {
    body?: Joi.ObjectSchema,
    checkAdminRole?: boolean;
  },
  skipJwtAuth?: boolean
}
export const relogRequestHandler = (
  handler: RequestHandler,
  options?: HandlerOptions,
): RequestHandler => async (req: Request, res: Response, next: NextFunction) => {
  logger.log({
    level: 'info',
    message: req.url
  });
  if (!options?.skipJwtAuth) {
    const token = req.headers['authorization'];

    if (token) {
      // eslint-disable-next-line consistent-return
      jwt.verify(token.replace('Bearer ', '').replace('Bearer', ''), process.env.SECRET, (err, decoded: ExtendedJwtPayload) => {
        if (err) {
          logger.log({
            level: 'info',
            message: 'Token Validation Failed'
          });
          return next(new UnauthorizedRequest());
        }
        req.user = decoded;
      });
    } else {
      logger.log({
        level: 'info',
        message: 'Auth token is not supplied'
      });
      return next(new UnauthorizedRequest('Auth token is not supplied'));
    }
  }
  if (options?.validation?.body) {
    const { error } = options?.validation?.body.validate(req.body);
    if (error != null) {
      return next(new BadRequest(getMessageFromJoiError(error)));
    }
  }

  if (options?.validation?.checkAdminRole && req.user.role !== Role.ADMIN) {
    return next(new UnauthorizedRequest('Unauthorized for this action. Check role permission'));
  }

  return handler(req, res, next).catch((err: Error) => {
    if (process.env.NODE_ENV === 'development') {
      logger.log({
        level: 'error',
        message: 'Error in request handler',
        error: err
      });
    }
    next(err);
  });
};
