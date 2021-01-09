import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class PageImage extends Model {
    public id!: number;
    public imageSrc!: string;
    public pageId!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PageImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imageSrc: {
            type: new DataTypes.STRING
        },
        pageId: {
            type: new DataTypes.INTEGER
        },
    },
    {
        tableName: "page_image",
        sequelize: database
    }
);
