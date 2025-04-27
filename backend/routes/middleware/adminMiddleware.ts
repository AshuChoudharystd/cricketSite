import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      admin?: { id: string };
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET;

const adminMiddleware = async(req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    if (!JWT_SECRET) {
      res.status(500).json({ error: 'Server configuration error' });
      return;
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: 'Invalid authorization header' });
      return;
    }

    const token = authHeader;

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & { id: string };

    if (!decoded.id) {
      res.status(401).json({ error: 'Invalid token payload' });
      return;
    }

    req.admin = { id: decoded.id };
    await next();

  } catch (error) {
    const errorMessage = error instanceof jwt.TokenExpiredError 
      ? 'Token expired' 
      : error instanceof jwt.JsonWebTokenError 
        ? 'Invalid token' 
        : 'Authentication failed';

    res.status(401).json({ error: errorMessage });
  }
};

export default adminMiddleware;