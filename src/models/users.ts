import jsonApi = require('jagapi')
import {attr, required, strAttr} from '../decorators/joi'
import {DefineOn, HandleWith, Namespace, PrimaryKey, ResourceName} from '../decorators/resource'
import {createHandler} from '../handlers/sequelize'
const Joi = jsonApi.Joi
const sqlHandler = createHandler()

@DefineOn(jsonApi) @HandleWith(sqlHandler)
@PrimaryKey('autoincrement') @ResourceName('users')
class UserResource {
  @required @attr public id?: string
  @required @attr public name: string
  @attr public age: number
}

/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({force: true})
