const DB_NAME = 'qbounty-backend'
const DB_USER = 'qbounty'
const DB_PASS = 'qbounty'
const DB_HOST = 'localhost'
const DB_PORT = '5432'
const DB_DIALECT = 'postgres'

exports = module.exports = {
    INFO: {
        TITLE: 'Coding Blocks qBounty API',
        DESC: 'Coding Blocks qBounty API Server',
        CONTACT: {
            NAME: 'Coding Blocks',
            EMAIL: 'dev@codingblocks.com',
            URL: 'https://codingblocks.com'
        }
    },
    SERVER: {
        HOST: 'localhost',
        PORT: 3535
    },
    DB: {
        DB_DIALECT, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME,
        DATABASE_URI: `${DB_DIALECT}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    }
}