import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class PageTag extends Model {
    public id!: number;
    public item_id!: number;
    public tag_id!: number;
    public page_type!: string;
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
        },
        item_id: {
            type: new DataTypes.INTEGER
        },
        tag_id: {
            type: new DataTypes.INTEGER
        },
        page_type: {
            type: new DataTypes.STRING
        }
    },
    {
        tableName: "page_tag",
        sequelize: database
    }
);


//Album.sync({ force: true }).then(() => console.log("Album table created"));
PageTag.sync().then(() => console.log("PageTag table created"));