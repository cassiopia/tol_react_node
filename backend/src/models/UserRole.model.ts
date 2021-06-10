import {Model, DataTypes} from "sequelize";
import {database} from "../config/database";

export class UserRole extends Model {
    public id!: number;
    public user_id!: number;
    public role_id!: number;
    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

UserRole.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        tableName: "user_role",
        sequelize: database
    }
);
