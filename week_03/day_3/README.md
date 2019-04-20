# AJAX

JavaScript is capable of performing Ajax requests without any code libraries; Ajax is something all major browsers support.

`npm install http-server -g` will globally install a simple Node web server that we can use anywhere to start an HTTP server in the current directory. It's great for small experiments,  so you don't have to write our own HTTP / Express server.

In the folder where your project is, run the command `http-server`. This will tell your web server to run on localhost:8080 and serve static (html, js, css, image, etc) files in the current directory. If it fails to start, check to make sure you don't already have your other server running on port 8080.

Load http://localhost:8080/<name of the html file> .

Ajax is used to get data from web servers into **String**s in JavaScript. Commonly the data is transferred as JSON **String**s so that they can be easily converted into JavaScript Objects. In fact, it's so common that jQuery will do the **String** to **Object** conversion for you if it can tell that the data is JSON.

Performance: better when return json than HTML.

# Databases

## [ACID](https://en.wikipedia.org/wiki/ACID_(computer_science))

Atomicity
Main article: Atomicity (database systems)
Transactions are often composed of multiple statements. Atomicity guarantees that each transaction is treated as a single "unit", which either succeeds completely, or fails completely: if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged. An atomic system must guarantee atomicity in each and every situation, including power failures, errors and crashes.

Consistency
Main article: Consistency (database systems)
Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants: any data written to the database must be valid according to all defined rules, including constraints, cascades, triggers, and any combination thereof. This prevents database corruption by an illegal transaction, but does not guarantee that a transaction is correct.

Isolation
Main article: Isolation (database systems)
Transactions are often executed concurrently (e.g., reading and writing to multiple tables at the same time). Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially. Isolation is the main goal of concurrency control; depending on the method used, the effects of an incomplete transaction might not even be visible to other transactions.

Durability
Main article: Durability (database systems)
Durability guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure (e.g., power outage or crash). This usually means that completed transactions (or their effects) are recorded in non-volatile memory.



Presentation Tier - HTML, CSS, JS
Application Tier - Node, Express, and other packages
Database Tier - MongoDB, or one of many other alternatives
