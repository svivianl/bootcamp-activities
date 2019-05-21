# RSpec in Rails

  - Easy setup
  - `rails generate rspec:model [model's name]`
  - Remove spaces in a string
```
"  hello  ".rstrip   #=> "  hello"
"hello".rstrip       #=> "hello"
```
```
"  hello  ".lstrip   #=> "hello  "
"hello".lstrip       #=> "hello"
```

# Deployment in Heroku


# Lecture Notes
  
  - lecture content [here](https://github.com/Ajwah/w8d1)
  - `.eq`: `==` (validates only the values)
  - `.eql`: `===` (validates the values and types)
  - `.equal`: validates if it is the same object/variable
  - `rspec --init`
  - `before` creates state and does not pass variables to the `it`s
    - `each do` is standard
    - `all do`
  - `let` creates state/concepts and pass variables to the `it`s
