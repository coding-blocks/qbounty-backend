"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphiql = require("express-graphiql-toolbox");
const swaggerUi = require("swagger-ui-express");
const api = require("./api");
/**
 * To serve a Swagger UI Console
 */
api.server.use('/docs', swaggerUi.serve, swaggerUi.setup(null, true, null, null, null, '/api/swagger.json', 'qBounty API Docs'));
/**
 * To serve a GraphiQL console
 */
api.server.use('/graphiql', graphiql({ endpoint: '/api/' }));
api.start();
//# sourceMappingURL=server.js.map