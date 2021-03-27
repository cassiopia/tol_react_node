import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class Role extends Model {
    public id!: number;
    public name!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public deletedAt!: Date;
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
        deletedAt: {
            type: new DataTypes.DATE
        },
    },
    {
        tableName: "role",
        sequelize: database,
        paranoid: true
    }
);