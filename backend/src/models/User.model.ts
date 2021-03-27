import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public deletedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING
        },
        email: {
            type: new DataTypes.STRING
        },
        password: {
            type: new DataTypes.STRING
        },
        deletedAt: {
            type: new DataTypes.DATE
        },
    },
    {
        tableName: "user",
        sequelize: database,
        paranoid: true
    }
);