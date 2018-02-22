// tslint:disable: no-unused-expression

import {BaseType} from 'jagapi'
import jagapi = require('jagapi')
import {NumberSchema, Schema, StringSchema} from 'joi'
import 'reflect-metadata'

const Joi = jagapi.Joi

function addAttribute(target, key, type) {
  if (!target.constructor.attributes) {
    target.constructor.attributes = {}
  }
  target.constructor.attributes[key] = Joi[type]()
}

export function JoiField <T extends BaseType>(target: T, key: string) {
  let joiType = 'any'
  switch (Reflect.getMetadata('design:type', target, key)) {
    case Boolean:
      joiType = 'boolean'
      break
    case Number:
      joiType = 'number'
      break
    case String:
      joiType = 'string'
      break
  }
  addAttribute(target, key, joiType)
}

export function JoiString<T extends BaseType>(target: T, key: string) {
  addAttribute(target, key, 'string')
}
function JoiNumberOnly<T extends BaseType>(target: T, key: string): void {
  addAttribute(target, key, 'number')
}

function JoiNumberWithParams<T extends BaseType>(params: Partial<JoiNumberParams>): PropertyDecorator {
  return (target: T, key: string) => {
    addAttribute(target, key, 'number')

    const attributes = (target.constructor as any).attributes

    params.max ? attributes[key] = (attributes[key] as NumberSchema).max(params.max) : void 0
    params.min ? attributes[key] = (attributes[key] as NumberSchema).min(params.min) : void 0
    params.greater ? attributes[key] = (attributes[key] as NumberSchema).greater(params.greater) : void 0
    params.less ? attributes[key] = (attributes[key] as NumberSchema).less(params.less) : void 0
  }
}
interface JoiNumberParams {
  min: number
  max: number
  greater: number
  less: number
}
interface JoiNumber {
  <T extends BaseType>(target: T, key?: string): void
  <T extends BaseType>(params: Partial<JoiNumberParams>): PropertyDecorator
}
export const JoiNumber: JoiNumber = (targetOrParams, key?) => {
  if (!key && typeof !(targetOrParams.constructor === 'function')) {
    return JoiNumberWithParams(targetOrParams)
  } else {
    JoiNumberOnly(targetOrParams, key)
  }
}
