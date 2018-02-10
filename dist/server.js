"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbg = require("debug");
const graphiql = require("express-graphiql-toolbox");
const swaggerUi = require("swagger-ui-express");
const api = require("./api");
const debug = dbg('qbounty:server');
/**
 * To serve a Swagger UI Console
 */
api.server.use('/docs', swaggerUi.serve, swaggerUi.setup(null, true, null, null, null, '/api/swagger.json', 'qBounty API Docs'));
/**
 * To serve a GraphiQL console
 */
api.server.use('/graphiql', graphiql({ endpoint: '/api/' }));
api.start(() => debug('Server started'));
//# sourceMappingURL=server.js.map