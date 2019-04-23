var myArgs = process.argv.slice(2);

const pg = require("pg");
const settings = require("./settings"); // settings.json

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const print = (rows) => {
  console.log(`Found ${rows.length} person(s) by the name '${myArgs[0]}':`);
  rows.forEach( (row, i) => { console.log(`- ${i+1}: ${row.first_name} ${row.last_name} born '${formatDate(row.birthdate)}'`) });
}

knex.transaction((tr) => tr('famous_people').select().where({ first_name: myArgs[0] }))
    .then(print)
    .then(() => knex.destroy())
    .catch(err => console.error("error running query ", err));

