import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Album extends Model {
    public id!: number;
    public albumHash!: string;
    public title!: string;
    public description!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export interface AlbumInterface {
    albumHash: string;
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
        albumHash: {
            type: new DataTypes.STRING
        },
        title: {
            type: new DataTypes.STRING
        },
        description: {
            type: new DataTypes.STRING
        }
    },
    {
        tableName: "album",
        sequelize: database
    }
);