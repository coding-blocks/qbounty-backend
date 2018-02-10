"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbg = require("debug");
const SQLStore = require("jagapi-sequelize");
const db_1 = require("../db");
const debug = dbg('qbounty:sql');
exports.createHandler = () => new SQLStore({ sequelize: db_1.sequelize });
//# sourceMappingURL=sequelize.js.map