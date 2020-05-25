const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelizeConfig = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false
})

const db = {}
db.Sequelize = Sequelize
db.sequelizeConfig = sequelizeConfig

db.tutorial = require('../models/tutorial.model')(sequelizeConfig, Sequelize)
