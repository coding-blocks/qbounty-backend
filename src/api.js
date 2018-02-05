const config = require('../config')
const jsonAPI = require('@coding-blocks/jsonapi-server')

jsonAPI.setConfig({
    graphiql: true,
    jsonapi: true,
    protocol: 'http',
    hostname: config.SERVER.HOST,
    port: config.SERVER.PORT,
    base: 'api',
    meta: {
        description: config.INFO.DESC
    },
    swagger: {
        title: config.INFO.TITLE,
        version: '0.1.0',
        description: config.INFO.DESC,
        contact: {
            name: config.INFO.CONTACT.NAME,
            email: config.INFO.CONTACT.EMAIL,
            url: config.INFO.CONTACT.URL,
        },
        license: {
            name: 'MIT',
            url: 'http://opensource.org/licenses/MIT'
        }
    }
})

jsonAPI.authenticate((req, cb) => {
    return cb()
})

jsonAPI.metrics.on('data', data => {
    debug('metrics')(data)
})

exports = module.exports = {
    server: jsonAPI.getExpressServer(),
    start: jsonAPI.start,
    close: jsonAPI.close
}