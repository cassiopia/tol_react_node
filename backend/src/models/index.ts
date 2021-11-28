import {Page} from "./Page.model";
import {Tag} from "./Tag.model";
import {PageTag} from "./PageTag.model";
import {PageImage} from "./PageImage.model";
import {database} from "../config/database";
import {Role} from "./Role.model";
import {User} from "./User.model";
import {UserRole} from "./UserRole.model";

(async () => {

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


//await database.sync({ force: true });
//console.log("All models were synchronized successfully.");
    database.sync().then(() => console.log("All models were synchronized successfully."));
    const defaultRoles = [{id: 1, name: "user"}, {id: 2, name: "moderator"}, {id: 3, name: "admin"}];
    await Role.bulkCreate(defaultRoles, {ignoreDuplicates: true});
})();
