import {BaseType} from 'jagapi'
import 'reflect-metadata'

export function PrimaryKey<T extends BaseType>(indexType: 'autoincrement' | 'uuid') {
  return (target, key: string) => {
    target.constructor.primaryKey = indexType
  }
}
export function Examples<T extends BaseType>(target: T, key: 'examples') {

}
