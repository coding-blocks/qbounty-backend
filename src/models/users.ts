import jsonApi = require('jagapi')
import {attr, required, strAttr} from '../decorators/joi'
import {DefineOn, HandleWith, Namespace, PrimaryKey, ResourceName} from '../decorators/resource'
import {createHandler} from '../handlers/sequelize'
const Joi = jsonApi.Joi
const sqlHandler = createHandler()

export interface User {
  id?: string
  name: string
}

@DefineOn(jsonApi) @HandleWith(sqlHandler)
@PrimaryKey('autoincrement') @ResourceName('users')
class UserResource {
  @required @attr
  public id?: string
  @required @attr
  public name: string
  @attr
  public age: number
}

// jsonApi.define<User>({
//   namespace: 'json:api',
//   resource: 'users',
//   handlers: sqlHandler,
//   primaryKey: 'autoincrement',
//   attributes: {
//     id: Joi.string(),
//     name: Joi.string().required()
//   },
//   examples: [
//     {type: 'users', name: 'Arnav'},
//     {type: 'users', name: 'Prateek'},
//     {type: 'users', name: 'Deepak'},
//     {type: 'users', name: 'Rishab'},
//     {type: 'users', name: 'Garima'}
//   ]
// })

/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({force: true})
