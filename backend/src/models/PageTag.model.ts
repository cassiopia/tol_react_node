import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class PageTag extends Model {
    public id!: number;
    public tagId!: number;
    public pageId!: number;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PageTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        tableName: "page_tag",
        sequelize: database
    }
);
