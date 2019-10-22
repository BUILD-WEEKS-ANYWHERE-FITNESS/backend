const knex = require('knex')

const config = require('../knexfile.js')

module.exports = knex(config[process.env.DB_ENV || 'development']);

// module.exports = knex(config.development)