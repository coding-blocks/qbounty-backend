import dbg = require('debug')
import Sequelize = require('sequelize')
import config = require('../../config')

const debug = dbg('qbounty:sql')

export const sequelize = new Sequelize({
  dialect: config.DB.DB_DIALECT,
  host: config.DB.DB_HOST,
  port: config.DB.DB_PORT,
  database: config.DB.DB_NAME,
  username: config.DB.DB_USER,
  password: config.DB.DB_PASS,
  logging: debug
})
