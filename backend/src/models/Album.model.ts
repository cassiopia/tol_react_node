import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Album extends Model {
    public id!: number;
    public album_hash!: string;
    public title!: string;
    public description!: string;
    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export interface AlbumInterface {
    album_hash: string;
    title: string;
    description: string;
}

Album.init(
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
        tableName: "album",
        sequelize: database
    }
);