module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define("album", {
        album_id: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
    });
};