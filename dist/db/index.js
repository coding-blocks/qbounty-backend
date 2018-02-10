"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbg = require("debug");
const Sequelize = require("sequelize");
const config = require("../../config");
const debug = dbg('qbounty:sql');
exports.sequelize = new Sequelize({
    dialect: config.DB.DB_DIALECT,
    host: config.DB.DB_HOST,
    port: config.DB.DB_PORT,
    database: config.DB.DB_NAME,
    username: config.DB.DB_USER,
    password: config.DB.DB_PASS,
    logging: debug
});
//# sourceMappingURL=index.js.map