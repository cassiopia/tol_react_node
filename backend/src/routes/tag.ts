import {TagController} from "../components/Tag/TagController";

module.exports = (app: any) => {

    const router = require("express").Router();

    const tag = new TagController();

    router.post("/add_tag", tag.addTag);

    router.put("/edit_tag", tag.editTag);

    router.get("/get_tags/:itemId/:tagType/:pageType", tag.getTags);

    app.use('/tag', router);
};
