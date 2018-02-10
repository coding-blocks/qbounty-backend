"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonApi = require("jagapi");
const sequelize_1 = require("../handlers/sequelize");
const Joi = jsonApi.Joi;
const sqlHandler = sequelize_1.createHandler();
jsonApi.define({
    namespace: 'json:api',
    resource: 'claims',
    handlers: sqlHandler,
    primaryKey: 'autoincrement',
    attributes: {
        id: Joi.string(),
        claimant: Joi.one('users', 'tasks').uidType('autoincrement').required(),
        task: Joi.one('tasks').uidType('autoincrement').required(),
        question: Joi.one('questions').uidType('autoincrement').required()
    },
    examples: [
        {
            type: 'claims',
            claimant: {
                id: '1', type: 'users'
            },
            task: {
                id: '1', type: 'tasks'
            },
            question: {
                id: '1', type: 'questions'
            }
        }
    ]
});
/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({ force: true });
//# sourceMappingURL=claims.js.map