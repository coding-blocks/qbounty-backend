import jsonApi = require('jagapi')
import {createHandler} from '../handlers/sequelize'

const Joi = jsonApi.Joi
const sqlHandler = createHandler()

export interface Question {
  id?: string
  title: string
  description: string
  sampleInput?: string
  sampleOutput?: string
  solution?: string
}

jsonApi.define<Question>({
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
})

/**
 * @param force set to true only for dev mode (drops tables)
 */
sqlHandler.populate({force: true})
