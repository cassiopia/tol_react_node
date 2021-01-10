import {Page} from "./Page.model";
import {Tag} from "./Tag.model";
import {PageTag} from "./PageTag.model";
import {PageImage} from "./PageImage.model";
import {database} from "../config/database";

Page.belongsToMany(Tag, {
    through: PageTag,
    foreignKey: 'pageId'
});

Tag.belongsToMany(Page, {
    through: PageTag,
    foreignKey: 'tagId'
});

Page.hasMany(PageImage, {
    foreignKey: 'pageId'
});

PageImage.belongsTo(Page, {
    foreignKey: 'pageId'
});

//database.sync({ force: true }).then(() => console.log("All models were synchronized successfully."));
database.sync().then(() => console.log("All models were synchronized successfully."));
