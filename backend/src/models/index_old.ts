// const dbConfig = require("../config/db.config");
//
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });
//
// let db: { [id: string]: any } = {};
//
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
//
// db.album = require("./albumt.model")(sequelize, Sequelize);
//
// module.exports = db;