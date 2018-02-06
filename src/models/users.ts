import jsonApi = require('jagapi')
import {createHandler} from '../handlers/sequelize'
const Joi = jsonApi.Joi
const sqlHandler = createHandler()

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
