import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class PageTag extends Model {
    public id!: number;
    public tag_id!: number;
    public page_id!: number;
    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

// todo нести поля для не прямого удаления тэгов

PageTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        createdAt: {
            type: new DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: new DataTypes.DATE,
            field: 'updated_at'
        }
    },
    {
        tableName: "page_tag",
        sequelize: database
    }
);
