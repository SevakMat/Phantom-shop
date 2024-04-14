import { ExtendedJwtPayload } from '../extended-jwt';

declare global {
    namespace Express {
        export interface Request {
            user?: ExtendedJwtPayload;
        }
    }
}
