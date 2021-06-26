// Update with your config settings.
// const sharedConfig = {
//   client: 'sqlite3',
//   useNullAsDefault: true,
//   migrations: {
//     directory: './data/migrations',
//   },
//   // seeds: {
//   //   directory: './data/seeds',   //////THIS IS OPTIONAL
//   // },
//   // this enables foreign keys in SQLite
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done)
//     },
//   },
// }




module.exports = {

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    // seeds: {
    //   directory: "./data/seeds"
    // }
    pool: {
      afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done)
      }
  }
},

  development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      },
      // seeds: {
      //   directory: "./data/seeds"
      // }
      pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done)
        }
    }
  },



  // development: {
  //   ...sharedConfig,
  //   connection: { filename: './dev.sqlite3' },
  // },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
