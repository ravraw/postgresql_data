const pg = require('pg');
const settings = require('./settings'); // settings.json

const args = process.argv.slice(2);
console.log(args);
let firstName = args[0];
let lastName = args[1];
let dob = args[2];

var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: '127.0.0.1',
    // user: 'your_database_user',
    // password: 'your_database_password',
    database: settings.database
  }
});

knex('famous_people')
  .insert({
    first_name: `${firstName}`,
    last_name: `${lastName}`,
    birthdate: `${dob}`
  })
  .then(function() {
    knex
      .select()
      .from('famous_people')
      .then(function(people) {
        console.log(people);
      })
      .then(() => {
        process.exit(1);
      });
  });
