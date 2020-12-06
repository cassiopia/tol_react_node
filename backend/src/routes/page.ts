import {PageController} from "../components/Page/PageController";

module.exports = (app: any) => {

    const router = require("express").Router();

    const page = new PageController();

    router.post("/create_page", page.create);
    router.put("/update_page", page.update);
    router.get("/get_by_page_type/:pageType", page.getAllByPageType);

    app.use('/page', router);
};
