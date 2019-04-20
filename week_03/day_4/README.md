# [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)

# [MongoDB](https://docs.mongodb.com/manual/introduction/)

document: object / register
collection of documents: table

The advantages of using documents are:

* Documents (i.e. objects) correspond to native data types in many programming languages.
* Embedded documents and arrays reduce need for expensive joins.
* Dynamic schema supports fluent polymorphism.

Command-line:
`mongo`
`show db`

There is no need to create a new database, you just connect to it and it gets created when you put some data in.

By switching to a new database, we are able to immediately insert a new document to a collection. When we insert a document, we're able to find() it later using the following command: `db.<name of the table>.find()`

The mongo Command-line Interface (CLI) / REPL is actually a JS REPL as described [here](https://docs.mongodb.com/manual/mongo/)

When we add the initial records to a database, it is often called seeding a database.

Insert array in a collection:`db.<name of the table>.insertMany(<array>)`

[Mongo shell quick reference](https://docs.mongodb.com/v3.0/reference/mongo-shell/)
[Insert Documents](https://docs.mongodb.com/manual/tutorial/insert-documents/)

In order to connect to the Mongo database server from our Node app, we must use an npm package that serves as the "driver".

We will install the native MongoDB driver for Node.js: `npm install mongodb@2.2 --save`

We'll start with some code that just connects, logs that it has connected, and exits. This gives you some skeleton code and it already shows quite a bit of what it looks like to work with Mongo in Node.
Create a new file mongo_example.js and type in the following code:
`
"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> In typical node-callback style, any program
  //     logic that needs to use the connection needs
  //     to be invoked from within here.
  //
  // Another way to say: this is an "entry point" for
  // a database-connected application!

  // ==> At the end, we close the connection:
  db.close();
});
`
Run the code with node and make sure it logs something happy:
`node mongo_example.js`

MongoClient is all we're interested in right now, although there are other properties in the mongodb module.

[Standard Connection String Format](https://docs.mongodb.com/manual/reference/connection-string/#standard-connection-string-format)

{
  ...
  projects:[
    {
      id: 'P1',
      ...
    },
    {
      id: 'P2',
      ...
    }
  ]
  ...
}

db.<collection>.find({"projects.id" : "P1"});

