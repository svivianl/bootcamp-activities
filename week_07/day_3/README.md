# Rails

[Getting Started with Rails Guide](https://guides.rubyonrails.org/v4.2/getting_started.html)

Rails is a web application development framework written in the Ruby language. 

To create a new controller, you will need to run the "controller" generator and tell it you want a controller called "welcome" with an action called "index", just like this:
` $ bin/rails generate controller welcome index `
Rails will create several files and a route for you.

[Routes](https://guides.rubyonrails.org/routing.html)

A **controller** is simply a class that is defined to inherit from ApplicationController. It's inside this class that you'll define methods that will become the actions for this controller. These actions will perform CRUD operations on the articles within our system.
`$ bin/rails generate controller articles`
There are public, private and protected methods in Ruby,
but only public methods can be actions for controllers.

**Models** in Rails use a singular name, and their corresponding database tables use a plural name. Rails provides a generator for creating models, which most Rails developers tend to use when creating new models. To create the new model, run this command in your terminal:
`bin/rails generate model Article title:string text:text`
Rails responded by creating a bunch of files: app/models/article.rb and db/migrate/20140120191729_create_articles.rb

Rake command to run the migration:
`bin/rake db:migrate `

**pluralize** is a rails helper that takes a number and a string as its arguments. If the number is greater than one, the string will be automatically pluralized.

 The **index**, **show**, **new**, and **edit** actions all correspond to pages, but there are additional **create**, **update**, and **destroy** actions as well. These actions don’t typically render pages (although they can); instead, their main purpose is to modify information about users in the database.

The `rake db:setup` command, which in turn calls the rake `db:schema:load` command, uses the schema file db/schema.rb to create the structure of our database from scratch. This is more efficient and reliable than running all the migrations from start to finish. However, database migrations are still needed to further mutate the database

`bin/rake routes` prints a table that defines all the different URL endpoints (ex: GET /cart) and where they map to (or are dispatched to) when these HTTP requests come in.

## Namespaces

[Here](http://guides.rubyonrails.org/routing.html#controller-namespaces-and-routing
)'s another explanation from the official Rails Guides
And [this](https://rubymonk.com/learning/books/1-ruby-primer/chapters/35-modules/lessons/80-modules-as-namespaces) reading discusses the importance of namespacing in Ruby

# Lecture Notes

`rake routes | grep categories` to see only the categories routes
`byebug` to debug (it is a command and a library), type `next` to go to the next instruction and `c` to run everything and exit the debugger
`bind c` to see all the modules you can write commands

[Lecture](https://web.compass.lighthouselabs.ca/activities/420/lectures/2579)
