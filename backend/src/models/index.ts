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
    foreignKey: 'page_id'
});

Tag.belongsToMany(Page, {
    through: PageTag,
    foreignKey: 'tag_id'
});

Page.hasMany(PageImage, {
    foreignKey: 'page_id'
});

PageImage.belongsTo(Page, {
    foreignKey: 'page_id'
});

// todo Если будут глюки -- смотреть тут ;)
Page.hasMany(PageTag, {
    foreignKey: 'page_id'
});

PageTag.belongsTo(Page, {
    foreignKey: 'page_id'
});

Role.belongsToMany(User, {
    through: UserRole,
    foreignKey: "role_id"
});

User.belongsToMany(Role, {
    through: UserRole,
    foreignKey: "user_id"
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
