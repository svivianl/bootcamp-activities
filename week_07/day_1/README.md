# irb

# [Blocks](https://yehudakatz.com/2010/02/07/the-building-blocks-of-ruby/) and yields in Ruby

In Ruby, methods may receive a code block in order to perform arbitrary segments of code.

When a method expects a block, it invokes it by calling the yield function.

This is very handy, for instance, to iterate over a list or to provide a custom algorithm.

Take the following example:

I'm going to define a Person class initialized with a name, and provide a do_with_name method that when invoked, would just pass the name attribute, to the block received.
````
class Person 
  def initialize( name ) 
       @name = name
  end

  def do_with_name 
      yield( @name ) 
  end
end
````
This would allow us to call that method and pass an arbitrary code block.

For instance, to print the name we would do:
````
person = Person.new("Oscar")

#invoking the method passing a block
person.do_with_name do |name|
  puts "Hey, his name is #{name}"
end
````
Would print:

Hey, his name is Oscar
Notice, the block receives, as a parameter, a variable called name (N.B. you can call this variable anything you like, but it makes sense to call it name). When the code invokes yield it fills this parameter with the value of @name.

`yield( @name )`
We could provide another block to perform a different action. For example, reverse the name:
````
#variable to hold the name reversed
reversed_name = ""

#invoke the method passing a different block
person.do_with_name do |name| 
  reversed_name = name.reverse
end

puts reversed_name

=> "racsO"
````
We used exactly the same method (do_with_name) - it is just a different block.

This example is trivial. More interesting usages are to filter all the elements in an array:
````
 days = ["monday", "tuesday", "wednesday", "thursday", "friday"]  

 # select those which start with 't' 
 days.select do | item |
     item.match /^t/
 end

=> ["tuesday", "thursday"]
````
Or, we can also provide a custom sort algorithm, for instance based on the string size:
````
 days.sort do |x,y|
    x.size <=> y.size
 end

=> ["monday", "friday", "tuesday", "thursday", "wednesday"]
````
I hope this helps you to understand it better.

BTW, if the block is optional you should call it like:

`yield(value) if block_given?`
If is not optional, just invoke it.

# Constants

- Capitalized words can be used to define a constant
- A constant can refer to a Module, a Class or simple data like Floats and Strings
- Namespacing is used heavily to limit the exposure of constants defined in the global namespace
- The *::* Syntax is used to access constants (Modules, Classes, etc)
- It is convention to only capitalize the first letter when defining Class and Module constants like Scientology
- It is convention to capitalize and underscore the entire name when defining value constants like FOUNDED_BY

# Lecture notes

`binding.pry` is used to debbug, you can step using `step` to go to the next instruction, you can also type the name of the variable to see the value in the terminal
`<object>.inspect` to see the attributes of the object
byebug to help with debugging
