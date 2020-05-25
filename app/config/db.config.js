require('dotenv').config()

module.exports = {
    host: process.env.APP_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    db: process.env.DB_NAME,
    dialect: 'mysql'
}
