import jsonApi = require('jagapi')
import {Schema} from 'joi'
const Joi = jsonApi.Joi
import "reflect-metadata"

export type attrTypes = 'one'
  | 'many'
  | 'string'
  | 'number'
  | 'object'

function setAttr(target: any, key: string, type: attrTypes) {
  if (!target.constructor.attributes) {
    target.constructor.attributes = {}
  }
  target.constructor.attributes[key] = Joi[type]()
}

function attr(target?: any, key?: string): any | ((t: any, k: string) => void) {
  let type: attrTypes = 'string'
  if (typeof target === 'string') {
    type = (target as attrTypes)
    return (t: any, k: string) => {
      setAttr(t, k, type)
    }
  } else {
    switch (Reflect.getMetadata('design:type', target, key)) {
      case String: type = 'string'; break;
      case Number: type = 'number'; break;
    }
    setAttr(target, key, type)
  }
}

function required(target: any, key: string) {
  if (!(target.constructor.attributes && target.constructor.attributes[key])) {
    throw new Error(`You need to define a type for key: ${key} (in model: ${target.constructor.name}) first`)
  }
  const joiAttr: Schema = target.constructor.attributes[key]
  joiAttr.required()
}
const anyAttr = (type: attrTypes) => ((target: any, key: string) => setAttr(target, key, type))

const strAttr = anyAttr('string')

export {
  attr,
  strAttr,
  required
}
