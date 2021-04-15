import {Request, Response, NextFunction} from 'express';
import {User} from '../models/User.model';

const checkDuplicateEmail = (req: Request, res: Response, next: NextFunction) => {
    // Email
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Ошибка! Email " + req.body.email + " уже используется!"
            });
            return;
        }

        next();
    });
};

const checkRolesExisted = (req: Request, res: Response, next: NextFunction) => {
    const Roles = ["user", "admin", "moderator"];

    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {

            if (!Roles.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;