import {Request, Response, NextFunction} from 'express';
import {User} from '../models/User.model';

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err: Error, decoded: any) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        // @ts-ignore
        req.userId = decoded.id;
        next();
    });
};


const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    User.findByPk(req.userId).then(user => {
        // @ts-ignore
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
};

const isModerator = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    User.findByPk(req.userId).then(user => {
        // @ts-ignore
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Moderator Role!"
            });
        });
    });
};

const isModeratorOrAdmin = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    User.findByPk(req.userId).then(user => {
        // @ts-ignore
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Moderator or Admin Role!"
            });
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isModeratorOrAdmin: isModeratorOrAdmin
};

module.exports = authJwt;