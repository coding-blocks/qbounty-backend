import {BaseType} from 'jagapi'
import {JoiField, JoiNumber, JoiString} from '../decorators/joi'
import {PrimaryKey} from '../decorators/resource'

class User {
  public type: string = 'users'
  @PrimaryKey('autoincrement')
  public id?: string
  @JoiField
  public name: string
  @JoiNumber({max: 100})
  public age: number
}

const u: User = new User()
console.log(u)
console.log(User)
