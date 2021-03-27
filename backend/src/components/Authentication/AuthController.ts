import {Request, Response} from 'express';
import {User} from '../../models/User.model';
import {Role} from '../../models/Role.model';

const {Op} = require("sequelize");
const config = require("../../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//todo Проверить что бы код смотрелся прилично

export class AuthController {

    public login(req: Request, res: Response) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (!user) {
                    return res.status(404).send({message: "User Not found."});
                }

                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }

                var token = jwt.sign({id: user.id}, config.secret, {
                    expiresIn: 86400 // 24 hours
                });

                var authorities: string[] = [];
                // @ts-ignore
                user.getRoles().then(roles => {
                    for (let i = 0; i < roles.length; i++) {
                        authorities.push("ROLE_" + roles[i].name.toUpperCase());
                    }
                    res.status(200).send({
                        id: user.id,
                        username: user.name,
                        email: user.email,
                        roles: authorities,
                        accessToken: token
                    });
                });
            })
            .catch(err => {
                res.status(500).send({message: err.message});
            });
    };

    public registration(req: Request, res: Response) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })
            .then(user => {
                if (req.body.roles) {
                    Role.findAll({
                        where: {
                            name: {
                                [Op.or]: req.body.roles
                            }
                        }
                    }).then(roles => {
                        // @ts-ignore
                        user.setRoles(roles).then(() => {
                            res.send({message: "User registered successfully!"});
                        });
                    });
                } else {
                    // user role = 1
                    // @ts-ignore
                    user.setRoles([1]).then(() => {
                        res.send({message: "User registered successfully!"});
                    });
                }
            })
            .catch(err => {
                res.status(500).send({message: err.message});
            });
    }
}