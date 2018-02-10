"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jagapi_1 = require("jagapi");
const sequelize_1 = require("../sequelize");
const sqlHandler = sequelize_1.createHandler();
class TaskHandler extends jagapi_1.ChainHandler {
}
exports.taskHandler = new TaskHandler().chain(sqlHandler);
//# sourceMappingURL=tasks.js.map