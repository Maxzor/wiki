const Knex = require('knex')

/* global WIKI */

// DB Config
module.exports = {
  async isCompatible () {
    return true
  },
  async check () {
    let dbClient = 'pg'
    let dbConfig = {
      host: '172.17.0.1',
      user: 'wikijs',
      password: 'wikijsrocks',
      database: 'wmod',
      port: '5432',
      dbUseSSL: false
    }

    // Initialize Knex
    let wpgknex = Knex({
      client: dbClient,
      useNullAsDefault: true,
      asyncStackTraces: true,
      connection: dbConfig,
      debug: true
    })

    try {
      WIKI.logger.info('Connecting to witcher database...')
      await wpgknex.raw('SELECT 1 + 1;')
      WIKI.logger.info('wmod Connection Successful [ OK ]')
      return true
    } catch (err) {
      WIKI.logger.error(`Database Connection Error: ${err.code} ${err.address}:${err.port}`)
      throw err
    }
  }
}
