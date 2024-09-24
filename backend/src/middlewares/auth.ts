import { PrismaClient } from '@prisma/client';

import { NextFunction, Request, Response } from 'express';

import AuthService, { Payload } from '@/services/AuthService';
import UserService from '@/services/UserService';
import { AuthorizationError } from '@/modules/exceptions';

const prisma = new PrismaClient();
const userService = new UserService(prisma);

function extractToken(headers: any): string {
  if (headers.authorization) {
    const [type, token] = headers.authorization.split(' ');
    if (type === 'Bearer') {
      return token;
    }
  }
  return '';
}

function raiseUnauthorizedException(next: NextFunction) {
  const err = new AuthorizationError('Unauthorized');
  next(err);
}

async function auth(req: Request, res: Response, next: NextFunction) {
  const token = extractToken(req.headers);

  if (!token) {
    return raiseUnauthorizedException(next);
  }

  try {
    const decoded = AuthService.verifyJWT(token) as Payload;
    const user = await userService.findByEmail(decoded.email);

    if (!user) {
      return raiseUnauthorizedException(next);
    }

    if (user.accessTokenSalt !== decoded.salt) {
      return raiseUnauthorizedException(next);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    req.user = user;
    req.headers.token = token;

    next();
  } catch (e: unknown) {
    raiseUnauthorizedException(next);
  }
}

export default auth;
