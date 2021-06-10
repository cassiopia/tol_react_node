import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Page extends Model {
    public id!: number;
    public album_hash!: string;
    public title!: string;
    public description!: string;
    public page_type!: string;
    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public deleted_at!: Date;
}

export interface PageInterface {
    title: string;
    description: string;
    page_type: string;
}

Page.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
        },
        page_type: {
            type: new DataTypes.STRING
        },
        createdAt: {
            type: new DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: new DataTypes.DATE,
            field: 'updated_at'
        },
        deletedAt: {
            type: new DataTypes.DATE,
            field: 'deleted_at'
        }

    },
    {
        tableName: "page",
        sequelize: database,
        paranoid: true
    }
);