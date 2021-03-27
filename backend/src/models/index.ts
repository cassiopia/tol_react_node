import {Page} from "./Page.model";
import {Tag} from "./Tag.model";
import {PageTag} from "./PageTag.model";
import {PageImage} from "./PageImage.model";
import {database} from "../config/database";
import {Role} from "./Role.model";
import {User} from "./User.model";
import {UserRole} from "./UserRole.model";

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

Role.belongsToMany(User, {
    through: UserRole,
    foreignKey: "roleId"
});

User.belongsToMany(Role, {
    through: UserRole,
    foreignKey: "userId"
});

Role.create({
    id: 1,
    name: "user"
});

Role.create({
    id: 2,
    name: "moderator"
});

Role.create({
    id: 3,
    name: "admin"
});

//database.sync({ force: true }).then(() => console.log("All models were synchronized successfully."));
database.sync().then(() => console.log("All models were synchronized successfully."));
