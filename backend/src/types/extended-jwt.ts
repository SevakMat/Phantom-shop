import { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../models';

export type ExtendedJwtPayload = Pick<IUser, 'email' | 'role'> & { userId: string } & JwtPayload;
