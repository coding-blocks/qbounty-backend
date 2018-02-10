import jsonApi = require('jagapi')
import {BaseType} from 'jagapi'
import {createHandler} from '../handlers/sequelize'
import {Question} from './questions'
import {Task} from './tasks'
import {User} from './users'
const Joi = jsonApi.Joi
const sqlHandler = createHandler()

export interface Claim {
  id?: string
  claimant: User | BaseType
  task: Task | BaseType
  question: Question | BaseType
}

jsonApi.define<Claim>({
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
})

/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({force: true})
