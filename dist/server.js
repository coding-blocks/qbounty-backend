const api = require('./api');
const swaggerUi = require('swagger-ui-express');
const graphiql = require('express-graphiql-toolbox');
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