import {PageController} from "../components/Page/PageController";

module.exports = (app: any) => {

    const router = require("express").Router();

    const page = new PageController();

    router.post("/create_page", page.create.bind(page));
    router.put("/update_page", page.update.bind(page));
    router.get(
        "/get_by_page_type/:pageType",
        page.getAllByPageType
    );
    router.get("/get_one_by_id/:pageId", page.getOneById);
    router.delete("/:id", page.softDeletePage);

    app.use('/page', router);
};
