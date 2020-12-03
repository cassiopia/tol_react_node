import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Tag extends Model {
    public id!: number;
    public title!: string;
    public type!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export interface TagInterface {
    title: string;
    type: string;
}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: new DataTypes.STRING
        },
        type: {
            type: new DataTypes.STRING
        }
    },
    {
        tableName: "tag",
        sequelize: database
    }
);


//Album.sync({ force: true }).then(() => console.log("Album table created"));
Tag.sync().then(() => console.log("Tag table created"));