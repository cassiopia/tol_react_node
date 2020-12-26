import {Page} from "./Page.model";
import {Tag} from "./Tag.model";
import {PageTag} from "./PageTag.model";
import {database} from "../config/database";

Page.belongsToMany(Tag, {
    through: PageTag,
    foreignKey: 'PageId'
});

Tag.belongsToMany(Page, {
    through: PageTag,
    foreignKey: 'TagId'
});

//database.sync({ force: true }).then(() => console.log("All models were synchronized successfully."));
database.sync().then(() => console.log("All models were synchronized successfully."));
