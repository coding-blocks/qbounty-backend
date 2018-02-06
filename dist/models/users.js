"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonApi = require("jagapi");
const sequelize_1 = require("../handlers/sequelize");
const Joi = jsonApi.Joi;
const sqlHandler = sequelize_1.createHandler();
jsonApi.define({
    namespace: 'json:api',
    resource: 'users',
    handlers: sqlHandler,
    primaryKey: 'autoincrement',
    attributes: {
        id: Joi.string(),
        name: Joi.string().required()
    },
    examples: [
        { type: 'users', name: 'Arnav' },
        { type: 'users', name: 'Prateek' },
        { type: 'users', name: 'Deepak' },
        { type: 'users', name: 'Rishab' },
        { type: 'users', name: 'Garima' }
    ]
});
/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({ force: true });
//# sourceMappingURL=users.js.map