module.exports = (sequelizeConfig, Sequelize) => {
    return sequelizeConfig.define('tutorial', {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.STRING
        }
    })
}
