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

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const print = (err, result) => {
  if (err) {
    return console.error("error running query", err);
  }
  console.log(`Found ${result.rows.length} person(s) by the name '${myArgs[0]}':`);

  result.rows.forEach( (row, i) => { console.log(`- ${i+1}: ${row.first_name} ${row.last_name} born '${formatDate(row.birthdate)}'`) });

  client.end();
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  console.log('Searching ...');

  client.query("SELECT * from famous_people where first_name = $1", [myArgs[0]], print);
});
