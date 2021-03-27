import {UserController} from "../components/Authentication/UserController";

const {authJwt} = require("../middleware");

module.exports = (app: any) => {

    const router = require("express").Router();

    const user = new UserController();

    router.get("/api/test/all", user.allAccess);

    router.get(
        "/api/test/user",
        [authJwt.verifyToken],
        user.userBoard
    );

    router.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        user.moderatorBoard
    );

    router.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        user.adminBoard
    );

    app.use('/user', router);
};