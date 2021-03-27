import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class UserRole extends Model {
    public id!: number;
    public userId!: number;
    public roleId!: number;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserRole.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        tableName: "user_role",
        sequelize: database
    }
);
