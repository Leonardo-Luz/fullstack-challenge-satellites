import { Request , Response , NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
    const payload = res.locals.payload;
        
    if(!payload)
    {
        res.status(403).json({ message: 'Access denied'});
        return;
    }
    else if(payload.role != 'admin')
    {
        res.status(403).json({ message: 'Access denied'});
        return;
    }
    next();
}

export const authantication = ( req: Request, res: Response, next: NextFunction ) => {
    const { authorization } = req.headers;

    const bearerToken = authorization?.split(' ');

    if(bearerToken != undefined)
    {
        if(bearerToken[0] != ('Bearer') || bearerToken[1] == undefined)
        {
            return res.status(401).json('Invalid token');
        }
        else
        {
            jwt.verify(bearerToken[1], process.env.JWT_SECRET!, (err, payload) => {
                if(err)
                {
                    res.status(403).json('Access denied');
                    return;
                }

                res.locals.payload = payload;

                next();
            })
        }
    }
    else
    {
        return res.status(401).json('Token not provided');
    }
}