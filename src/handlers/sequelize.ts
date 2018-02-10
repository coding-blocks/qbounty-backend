import dbg = require('debug')
import SQLStore = require('jagapi-sequelize')
import config = require('../../config')
import {sequelize} from '../db'

const debug = dbg('qbounty:sql')

export const createHandler = () => new SQLStore({sequelize})
