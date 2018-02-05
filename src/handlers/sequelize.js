const SQLStore = require('jagapi-sequelize')
const debug = require('debug')('qbounty:sql')
const config = require('../../config')

const createHandler = () => new SQLStore({
    dialect: config.DB.DB_DIALECT,
    host: config.DB.DB_HOST,
    port: config.DB.DB_PORT,
    database: config.DB.DB_NAME, // If not provided, defaults to the name of the resource
    username: config.DB.DB_USER,
    password: config.DB.DB_PASS,
    logging: debug
})

exports = module.exports = {
    createHandler
}