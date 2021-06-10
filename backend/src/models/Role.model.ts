import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Role extends Model {
    public id!: number;
    public name!: string;
    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public deleted_at!: Date;
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
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
        },
    },
    {
        tableName: "role",
        sequelize: database,
        paranoid: true
    }
);