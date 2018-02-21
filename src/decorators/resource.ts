import jsonApi = require('jagapi')
import {Handler} from 'jagapi'
import {ResourceConfig} from 'jagapi/types/ResourceConfig'

interface Resource {
  name: string
  resource: string
  handlers: Handler<any>
  namespace: string
  primaryKey: string
  attributes: any
}

function DefineOn<R extends Partial<Resource>>(ja: typeof jsonApi) {
  return (constructor: R) => {
    if (!constructor.resource) {
      throw Error(`You need to name ${constructor.name}`)
    }
    if (!constructor.handlers) {
      throw Error(`You need to define handlers for ${constructor.name}`)
    }

    ja.define({
      namespace: constructor.namespace  || 'json:api',
      resource: constructor.resource ,
      primaryKey: constructor.primaryKey || 'autoincrement',
      handlers: constructor.handlers,
      attributes: constructor.attributes,
      examples: []
    })
  }
}

function PrimaryKey(type: 'autoincrement' | 'uuid') {
  return <T extends any>(constructor: T) => {
    constructor.primaryKey = type
  }
}

function ResourceName(name: string) {
  return <T extends any>(constructor: T) => {
    constructor.resource = name
  }
}

function Namespace(ns: string) {
  return <T extends any>(constructor: T) => {
    constructor.namespace = ns
  }
}

function HandleWith(handler: Handler<any>) {
  return <T extends any>(constructor: T) => {
    constructor.handlers = handler
  }
}

export {
  DefineOn,
  PrimaryKey,
  ResourceName,
  Namespace,
  HandleWith
}
