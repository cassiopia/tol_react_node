import {UserController} from "../components/Authentication/UserController";

const {authJwt} = require("../middleware");

module.exports = (app: any) => {

    const router = require("express").Router();

    const user = new UserController();

    router.get("/allUser", user.allAccess);

    router.get(
        "/user",
        [authJwt.verifyToken],
        user.userBoard
    );

    router.get(
        "/moderator",
        [authJwt.verifyToken, authJwt.isModerator],
        user.moderatorBoard
    );

    router.get(
        "/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        user.adminBoard
    );

    app.use('/user', router);
};