// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    // connection: require('./settings.json')
    connection: {
      // user: 'development',
      // password: 'development',
      database: 'test_db',
      hostname: 'localhost'
      // port: 5432,
      // ssl: true
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'test_db'
      // user: '',
      // password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
