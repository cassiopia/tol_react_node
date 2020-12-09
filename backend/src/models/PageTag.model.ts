import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";
import {Tag} from './Tag.model';
import {Page} from './Page.model';

export class PageTag extends Model {
    public id!: number;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PageTag.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        tableName: "page_tag",
        sequelize: database
    }
);

Page.belongsToMany(Tag, {
    through: PageTag,
    foreignKey: 'pageId'
});
Tag.belongsToMany(Page, {
    through: PageTag,
    foreignKey: 'tagId'
});

//PageTag.sync({ force: true }).then(() => console.log("PageTag table created"));
PageTag.sync().then(() => console.log("PageTag table created"));