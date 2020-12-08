import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Page extends Model {
    public id!: number;
    public albumHash!: string;
    public title!: string;
    public description!: string;
    public pageType!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export interface PageInterface {
    title: string;
    description: string;
    pageType: string;
}

Page.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        albumHash: {
            type: new DataTypes.STRING
        },
        title: {
            type: new DataTypes.STRING
        },
        description: {
            type: new DataTypes.STRING
        }
        ,
        pageType: {
            type: new DataTypes.STRING
        }
    },
    {
        tableName: "pages",
        sequelize: database
    }
);


//Page.sync({ force: true }).then(() => console.log("Page table created"));
Page.sync().then(() => console.log("Page table created"));