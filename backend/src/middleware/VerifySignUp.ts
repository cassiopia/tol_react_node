import {Request, Response, NextFunction} from 'express';
import {User} from '../models/User.model';

const checkDuplicateUsernameOrEmail = (req: Request, res: Response, next: NextFunction) => {

    //Username
    User.findOne({
        where: {
            name: req.body.name
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }

        // Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
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
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;