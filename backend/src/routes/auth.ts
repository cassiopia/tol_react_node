import {AuthController} from "../components/Authentication/AuthController";

const {verifySignUp} = require("../middleware");

module.exports = (app: any) => {

    const router = require("express").Router();

    const auth = new AuthController();

    router.post(
        "/registration",
        [
            verifySignUp.checkDuplicateEmail
            ,
            verifySignUp.checkRolesExisted
        ],
        auth.registration
    );

    router.post("/login", auth.login);

    app.use('/auth', router);
};
