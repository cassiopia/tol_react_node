import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Album extends Model {
    public id!: number;
    public album_hash!: string;
    public title!: string;
    public description!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export interface AlbumInterface {
    // todo Заменить на album_hash и протестировать
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
        }
    },
    {
        tableName: "album",
        sequelize: database
    }
);


//Album.sync({ force: true }).then(() => console.log("Album table created"));
Album.sync().then(() => console.log("Album table created"));