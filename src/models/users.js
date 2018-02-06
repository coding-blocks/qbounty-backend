const jsonApi = require('jagapi')
const sqlHandler = require('../handlers/sequelize').createHandler()
const Joi = jsonApi.Joi

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
        {type: 'users', name: 'Arnav'},
        {type: 'users', name: 'Prateek'},
        {type: 'users', name: 'Deepak'},
        {type: 'users', name: 'Rishab'},
        {type: 'users', name: 'Garima'}
    ]
})

/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({force: true})
