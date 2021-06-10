import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Tag extends Model {
    public id!: number;
    public title!: string;
    public type!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: new DataTypes.STRING,
            unique: true
        },
        type: {
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
        tableName: "tag",
        sequelize: database
    }
);