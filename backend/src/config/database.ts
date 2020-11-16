import {Sequelize} from 'sequelize';

export const database = new Sequelize({
    database: 'trip_on_life',
    dialect: 'postgres',
    username: 'cassiopia',
    password: 'triponlifebdpostgre',
});