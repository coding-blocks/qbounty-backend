"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbg = require("debug");
const SQLStore = require("jagapi-sequelize");
const config = require("../../config");
const debug = dbg('qbounty:sql');
exports.createHandler = () => new SQLStore({
    dialect: config.DB.DB_DIALECT,
    host: config.DB.DB_HOST,
    port: config.DB.DB_PORT,
    database: config.DB.DB_NAME,
    username: config.DB.DB_USER,
    password: config.DB.DB_PASS,
    logging: debug
});
//# sourceMappingURL=sequelize.js.map