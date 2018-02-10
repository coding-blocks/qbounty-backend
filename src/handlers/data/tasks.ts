import {ChainHandler, Handler} from 'jagapi'
import {createHandler} from '../sequelize'
const sqlHandler = createHandler()

class TaskHandler extends ChainHandler {
  // public afterSearch(request, results, pagination, callback) {
  //   results = results.map((result) => {
  //     if (result.bounty === null) {
  //       delete result.bounty
  //     }
  //     return result
  //   })
  //   return callback(null, results, pagination);
  // };
}

export const taskHandler: Handler = new TaskHandler().chain(sqlHandler)
