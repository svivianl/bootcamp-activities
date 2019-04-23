The `pg` and `knex` drivers are in the `package.json` in this [folder](https://github.com/vshibukawa/bootcamp-activities).

# Connecting PostgreSQL tfrom JavaScript

Install drivers from [here](https://github.com/brianc/node-postgres).

Once you have the pg module installed, read and understand the [Getting Started](https://node-postgres.com/) example in the documentation. The additional information about things like Connection Pooling are important but not for simple apps. You may read this but knowing about it at this stage is not necessary.

test_script.js
Research and/or Discuss:

What other information does the result object returned from query contain?
Why does the query function take in an array of arguments?
Is there any resemblance to the mongo driver that you used in Week 3, in this activity?
What is this new keyword that you see being used to create the client? You may not have seen this before.

# Building Queries with Knex

Knex is an alternative way to retrieve data from our relational database. Ultimately, your application will still send a SQL statement to your database, however we'll leverage a query builder library to help us construct SQL queries. Abstractions like Knex are often used in the wild instead of using pg and raw SQL directly, and for this reason it is important to spend some time with Knex. 
Knex.js is a JavaScript library that connects to various RDBMS. It also includes a query builder that enables us to construct database queries in object-oriented techniques.

We need to install the [knex](https://knexjs.org/)
