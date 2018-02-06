"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonApi = require("jagapi");
const sequelize_1 = require("../handlers/sequelize");
const Joi = jsonApi.Joi;
const sqlHandler = sequelize_1.createHandler();
jsonApi.define({
    namespace: 'json:api',
    resource: 'questions',
    handlers: sqlHandler,
    primaryKey: 'autoincrement',
    attributes: {
        id: Joi.string(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        sampleInput: Joi.string(),
        sampleOutput: Joi.string(),
        solution: Joi.string(),
    },
    examples: [
        {
            type: 'questions',
            title: 'N-Queens Sample Problem',
            description: 'a'
        }
    ]
});
/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({ force: true });
//# sourceMappingURL=questions.js.map