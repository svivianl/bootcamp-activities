# SQL

[SQL zoo](https://sqlzoo.net/wiki/SQL_Tutorial)

## Like (%)
Bahamas has three a - who else?

Find the countries that have three or more a in the name
`
SELECT name FROM world
WHERE name LIKE '%a%a%a%'
`
If you want to do case-insensitive search for either a or A then you can use the LOWER() function:

`
SELECT name FROM world
WHERE LOWER(name) LIKE '%a%a%a%'
`

We could also use REGEXP here:
`
SELECT name FROM world
WHERE name REGEXP '(.*[a]){3,}';
`


India and Angola have an n as the second character. You can use the underscore as a single character wildcard.
`
SELECT name FROM world
 WHERE name LIKE '_n%'
ORDER BY name
`
Lesotho and Moldova both have two o characters separated by two other characters.

Find the countries that have two "o" characters separated by two others.

`
SELECT name FROM world
 WHERE name LIKE '%o__o%'
`

The capital of Luxembourg is Luxembourg. Show all the countries where the capital is the same as the name of the country

Find the country where the name is the capital city.
`
SELECT name
  FROM world
 WHERE name = capital 
`

The capital of Mexico is Mexico City. Show all the countries where the capital has the country together with the word "City".

Find the country where the capital is the country plus "City".
`
SELECT name FROM world
 WHERE capital = concat(name, ' City')
` 


Find the capital and the name where the capital includes the name of the country.
`
SELECT capital, name FROM world
 WHERE capital LIKE concat('%', name, '%')
`

Find the capital and the name where the capital is an extension of name of the country.

You should include Mexico City as it is longer than Mexico. You should not include Luxembourg as the capital is the same as the country.
`
SELECT capital, name FROM world
 WHERE capital LIKE concat(name, '_%')
` 

For Monaco-Ville the name is Monaco and the extension is -Ville.

Show the name and the extension where the capital is an extension of name of the country.
`
select name,mid(capital,length(name)+1) ext
from world
where capital like concat(name,'_%')
` 

Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000.

Show per-capita GDP for the trillion dollar countries to the nearest $1000.
`
SELECT name, round((gdp /population), -3)
FROM world
WHERE gdp >= 1000000000000
`

The capital of Sweden is Stockholm. Both words start with the letter 'S'.

Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.
You can use the function LEFT to isolate the first character.
You can use <> as the NOT EQUALS operator.
`
SELECT name, capital
FROM world
where LEFT(name,1) = LEFT(capital,1)
and name <> capital
`

Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name.

Find the country that has all the vowels and no spaces in its name.

You can use the phrase name NOT LIKE '%a%' to exclude characters from your results.
The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'
`
SELECT name
  FROM world
WHERE name LIKE '%a%'
AND name LIKE '%e%'
AND name LIKE '%i%'
AND name LIKE '%o%'
AND name LIKE '%u%'
AND name NOT LIKE '% %'
`

Find all details of the prize won by EUGENE O'NEILL

Escaping single quotes
You can't put a single quote in a quote string directly. You can use two single quotes within a quoted string.
`
select yr, subject, winner
from nobel
where winner = 'EUGENE O''NEILL'
`

Knights in order

List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.
`
select winner, yr, subject
from nobel
where winner like 'Sir%'
order by yr desc
`


The expression subject IN ('Chemistry','Physics') can be used as a value - it will be 0 or 1.

Show the 1984 winners and subject ordered by subject and winner name; but list Chemistry and Physics last.
`
SELECT winner, subject 
  FROM nobel
 WHERE yr=1984
 ORDER BY subject IN ('Physics','Chemistry'), subject,winner
`

To JOIN game with eteam you could use either
game JOIN eteam ON (team1=eteam.id) or game JOIN eteam ON (team2=eteam.id)

Notice that because id is a column name in both game and eteam you must specify eteam.id instead of just id

List the the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.
`
SELECT mdate, teamname
 from eteam 
  inner join game 
  on team1=eteam.id
 where coach =  'Fernando Santos'
 `

List every match with the goals scored by each team as shown. This will use "CASE WHEN" which has not been explained in any previous exercises.
mdate team1 score1  team2 score2
1 July 2012 ESP 4 ITA 0
10 June 2012  ESP 1 ITA 1
10 June 2012  IRL 1 CRO 3
...
Notice in the query given every goal is listed. If it was a team1 goal then a 1 appears in score1, otherwise there is a 0. You could SUM this column to get a count of the goals scored by team1. Sort your result by mdate, matchid, team1 and team2.
`
SELECT DISTINCT mdate, team1,
  SUM(CASE WHEN teamid=team1 THEN 1 ELSE 0 END) score1,
    team2,
    SUM(CASE WHEN teamid=team2 THEN 1 ELSE 0 END) score2
FROM game
LEFT JOIN goal ON game.id = goal.matchid
GROUP BY id, mdate, team1, team2
ORDER BY mdate, matchid, team1, team2
`

The ANY operator returns true if any of the subquery values meet the condition.
The ALL operator returns true if all of the subquery values meet the condition.

Which countries have a GDP greater than every country in Europe? Return the name only. (Some countries may have NULL gdp values)
`
SELECT name FROM world 
  WHERE gdp > ALL
   (SELECT gdp FROM world
    WHERE continent = 'Europe' 
      AND gdp > 0)
`

Check [here](https://dev.mysql.com/doc/refman/5.7/en/explain.html) for more information about `EXPLAIN`.
The SQL keyword `EXPLAIN` provides powerful insights into how a DBMS actually executes your query.

Known as a Query Plan or Execution Plan, EXPLAIN shows us information such as which tables are scanned, and which indexes are used for JOINs.

```
EXPLAIN SELECT sum(i) FROM foo WHERE i < 10;

                             QUERY PLAN
---------------------------------------------------------------------
 Aggregate  (cost=23.93..23.93 rows=1 width=4)
   ->  Index Scan using fi on foo  (cost=0.00..23.92 rows=6 width=4)
         Index Cond: (i < 10)
(3 rows)
```

## PSQL

`psql` in the command line

`\l` command to see all the databases
`use <name of the db>` to use the db
`\dt` show all the tables
`\e`goes to vim so you can edit the command again, after exit you can run the command again

The `id`of type `SERIAL` is not auto-incremented. In PSQL, we need to increment the id manually.
User `'` and not `"` when typing data in the query;

`q` to exit the result screen
`\q` to exit the `psql`

`EXPLAIN ANALIZE` before the `SELECT`

You can create a seed script for your database. This can be run simly with:
`psql < pgseed.sql`

### Create a test database
For this exercise you will need to create your own database, but don't worry! It's easy!

First, make sure you are inside hte Postgres CLI (use the command `psql` mentioned above).

Create a database called test_db with the SQL script below.

`
CREATE DATABASE test_db;
`
Once the database is created, we need to tell Postgres that we want to use it. To connect to the database you created, use the command below.
`
\c test_db;
`
If you connected successfully, you should see output in the terminal similar to this:
`
psql (9.2.4)
Type "help" for help.
You are now connected to database "testdb" as user "postgres".
test_db=# 
`
The prompt `test_db=#` indicates that you are using your recently created database. Any SQL you run will now act on this database.

### Create a sample table
To practice working with the shell and some basic CRUD operations, do the following:

Create a table, famous_people:

`
CREATE TABLE famous_people (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  birthdate DATE
);
`
Observe how the psql shell allows you to type commands across multiple lines. The semicolon ; at the end of a given command is what makes that command execute in your PG server.

Insert some data:

`
INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Abraham', 'Lincoln', '1809-02-12');
INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Mahatma', 'Gandhi', '1869-10-02');
INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Paul', 'Rudd', '1969-04-06');
INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Paul', 'Giamatti', '1967-06-06');
`
Feel free to add some of your favourite famous people in there too!

Play with sample data
`
SELECT * FROM famous_people; -- should give us back all 3
SELECT * FROM famous_people WHERE birthdate >= '1920-01-01';
SELECT * FROM famous_people WHERE birthdate < '1920-01-01';
`


# [UML](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/)

Check the concepts [here](https://javarevisited.blogspot.com/2014/02/ifference-between-association-vs-composition-vs-aggregation.html#ixzz5lqmr1v3x).

## Association

A relationship between two objects is referred as an association, and an association is known as composition when one object owns other while an association is known as aggregation when one object uses another object.

### Composition

Composition is Car and it's part e.g. engines, wheels etc. Individual parts of the car can not function when a car is destroyed.

### Aggregation

Aggregation is Student in School class, when School closed, Student still exist and then can join another School or so. 

# DDL x DML

## [DDL](https://en.wikipedia.org/wiki/Data_definition_language)

A data definition or data description language (DDL) is a syntax similar to a computer programming language for defining data structures, especially database schemas. DDL statements create, modify, and remove database objects such as tables, indexes, and users. Common DDL statements are CREATE, ALTER, and DROP

## [DML](https://en.wikipedia.org/wiki/Data_manipulation_language)

A data manipulation language (DML) is a computer programming language used for adding (inserting), deleting, and modifying (updating) data in a database. A DML is often a sublanguage of a broader database language such as SQL, with the DML comprising some of the operators in the language.[1] Read-only selecting of data is sometimes distinguished as being part of a separate data query language (DQL), but it is closely related and sometimes also considered a component of a DML; some operators may perform both selecting (reading) and writing.

A popular data manipulation language is that of Structured Query Language (SQL), which is used to retrieve and manipulate data in a relational database.[2] Other forms of DML are those used by IMS/DLI, CODASYL databases, such as IDMS and others.
