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
            type: DataTypes.INTEGER,
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
        // todo название таблицы должно быть с маленькой буквы и таблица Page тоже
        tableName: "Tag",
        sequelize: database
    }
);