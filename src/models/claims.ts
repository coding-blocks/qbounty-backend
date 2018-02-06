import jsonApi = require('jagapi')
import {createHandler} from '../handlers/sequelize'
const Joi = jsonApi.Joi
const sqlHandler = createHandler()

jsonApi.define({
  namespace: 'json:api',
  resource: 'claims',
  handlers: sqlHandler,
  primaryKey: 'autoincrement',
  attributes: {
    id: Joi.string(),
    claimant: Joi.one('users').uidType('autoincrement').required()
  },
  examples: [
    {
      type: 'tasks',
      title: 'N-Queens Problem',
      description: 'Make a problem from N-Queens',
      instances: 2,
      owner: {
        id: '1',
        type: 'users'
      }
    },
    {
      type: 'tasks',
      title: 'Array 2-sum',
      description: 'Make a problem on Array 2-sum-K',
      instances: 2,
      owner: {
        id: '1',
        type: 'users'
      }
    },
    {
      type: 'tasks',
      title: 'Palindrome Subsequence',
      description: 'Make a question about finding palindromic subsequences',
      instances: 2,
      owner: {
        id: '2',
        type: 'users'
      }
    }
  ]
})

/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({force: true})
