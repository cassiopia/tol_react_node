import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class PageImage extends Model {
    public id!: number;
    public image_src!: string;
    public page_id!: string;
    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

PageImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        image_src: {
            type: new DataTypes.STRING
        },
        page_id: {
            type: new DataTypes.INTEGER
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
        tableName: "page_image",
        sequelize: database
    }
);
