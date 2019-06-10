# RDBMS

[RDBMS](http://code.tutsplus.com/tutorials/relational-databases-for-dummies--net-30244) (Relational Database Management Systems)

A relational database is a type of database that organizes data into tables, and links them, based on defined relationships. These relationships enable you to retrieve and combine data from one or more tables with a single query.

## Entity-Relationship Diagrams

* Entity
* Attribute
* Primary Key
* Relationship
* Cardinality

## Data relationships

* Primary Key
* Foreign Key
* Relationships / Cardinality
* One-to-One
* One-to-Many
* Many-to-Many


## SQL

Structured Query Language (SQL) is a programming language used to interact with relational databases.

Tutorial [here](https://www.khanacademy.org/computing/computer-programming/sql)

CREATE TABLE <name of the table> ( id INTEGER PRIMARY KEY,  <attributes separated by ',' with the types>);

INSERT INTO <name of the table> VALUES (<values separated by ',' in the same order as they where created>);

```
CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, release_year INTEGER);
INSERT INTO movies VALUES (1, "Avatar", 2009);
INSERT INTO movies VALUES (2, "Titanic", 1997);

INSERT INTO movies (name, release_year) VALUES ("Disney's Up", 2009);
 
 
SELECT * FROM MOVIES;
SELECT * FROM MOVIES WHERE RELEASE_YEAR >= 2000 ORDER BY RELEASE_YEAR;

select title from songs where artist = (select name from artists where genre = 'Pop');

select author, sum(words) as total_words from books group by author having total_words > 1000000;

select author, avg(words) as avg_words from books group by author having avg_words > 150000;

Select name, number_grade, round(fraction_completed * 100) as percent_completed
    from student_grades;

select count(*), case
    when number_grade >= 90 THEN 'A'
    when number_grade >= 80 THEN 'B'
    when number_grade >= 70 THEN 'C'
    ELSE 'F'
    END AS LETTER_GRADE
    FROM STUDENT_GRADES
    GROUP BY LETTER_GRADE;


```
cross-join: 
  `select * from table1, table2;`
inner join: 
  `select * from tbale1, table2 
      where table1.id = table2.id;`
outer-join: 
  `select t1.attr1, t2.attrX 
      from table1 t1
      left outer join table2 t2
      on t1.id = t2.id;`


**Important:** cannot have `having`without having a `group by`

## [Database Normalization](https://blog.udemy.com/normalization-in-database-with-example/)

The process of normalization organizes the data in a way reduces redundancy. This makes the data highly space-efficient on disk, however it can have trade-offs when retrieving large sets of related data.

You need to consider: 
* if the information in the database has internal redundancies
* if there are dependencies across the different tables in the database are logically organized

* First normal form: can you create only one table?
* Second normal form: if not, create another with foreign key
* Third normal form: 
* Fourth normal form: need to create link table
