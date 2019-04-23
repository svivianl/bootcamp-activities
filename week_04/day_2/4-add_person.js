const data = [
    {
      first_name: 'Albert',
      last_name: 'Einstein',
      birthdate: '1879-03-14'
    },
    {
      first_name: 'Stephen',
      last_name: 'Hawking',
      birthdate: '1942-01-08'
    }
  ];

const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const insertData = (tr) => {
  knex('famous_people')
      .transacting(tr)
      .insert(data)
      .then(tr.commit)
      .catch(error => {
        tr.rollback;
        throw error;
      });
};

knex.transaction(insertData)
    .then(() => knex.destroy())
    .catch(err => console.error("error running query ", err));

