# Step 1

Running `bin/rails generate model [name] [fields]` in the project directory will generate both the model and migration.

`bin/rails generate model reviews product_id:integer user_id:integer description:string rating:integer products:references users:references`

createdat and updatedat timestamps (datetime) are created automatically


`rake db:migrate` `rake db:rollback`

`rails generate migration [name of the new migration]`

# Step 3

`bin/rails console`

If you wish to test out some code without changing any data, you can do that by invoking `bin/rails console --sandbox`.

`bin/rake db:reset`

# Lecture Notes

String: varchar255
Text: unlimited size
`bin/rake - T` to know everything that the rake can do
