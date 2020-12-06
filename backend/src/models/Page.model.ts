import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Page extends Model {
    public id!: number;
    public album_hash!: string;
    public title!: string;
    public description!: string;
    public page_type!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export interface PageInterface {
    //album_hash: string;
    title: string;
    description: string;
    page_type: string;
}

Page.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        album_hash: {
            type: new DataTypes.STRING
        },
        title: {
            type: new DataTypes.STRING
        },
        description: {
            type: new DataTypes.STRING
        }
        ,
        page_type: {
            type: new DataTypes.STRING
        }
    },
    {
        tableName: "pages",
        sequelize: database
    }
);


//Album.sync({ force: true }).then(() => console.log("Album table created"));
Page.sync().then(() => console.log("Page table created"));