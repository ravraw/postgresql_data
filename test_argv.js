const pg = require('pg');
const settings = require('./settings'); // settings.json

const args = process.argv.slice(2)[0];
console.log(typeof args);

const client = new pg.Client({
  // user: settings.user,
  // password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port
  // ssl: settings.ssl
});

client.connect(err => {
  if (err) {
    return console.error('Connection Error', err);
  }
  client.query(
    `SELECT * FROM famous_people
    WHERE first_name = '${args}';`,
    (err, result) => {
      if (err) {
        return console.error('error running query', err);
      }
      // console.log(result.rows[0].number); //output: 1
      console.log(result.rows);
      client.end();
    }
  );

  // client.query('SELECT $1::int AS number', ['1'], (err, result) => {
  //   if (err) {
  //     return console.error('error running query', err);
  //   }
  //   console.log(result.rows[0].number); //output: 1
  //   client.end();
  // });
});
