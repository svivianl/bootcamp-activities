# Version Managers

Version Managers are useful tools that allow us to easily download and switch between different versions of software, like Node.

NVM is the Node Version Manager. It allows a developer to use their command line to easily download and switch between different versions of node on their machine.

Ruby has it's very own version manager called RVM.

# Ruby

## Command lines

|       Node      |       Ruby      | Notes                     |
| --------------- |:---------------:| -------------------------:|
| `node --version`| `ruby --version`| version                   |
| `which node`    | `which ruby`    | where to find the commands|
| `nvm`           | `rvm`           | version manager           |
| `nvm use 0.0.0` |                 | use a 0.0.0 version       |
| `nvm list`      | `rvm list`      | list                      |
| `node`          | `irb`           | repl                      |
| `node`          | `ruby -w `      | run a file in the terminal|
| `CTRL + C`      | 'quit'          | quit                      |
| `npm`           | `gem`           | module packages           |

PATH environment variable: `echo $PATH`
`gem list` lists the global/system-wide installed gems (including *rails*).


## [Learn ruby in Y minutes](https://learnxinyminutes.com/docs/ruby/)

*nil* equivalent to null in other languages

`
!!nil   #=> false
!!false #=> false
!!0     #=> true
!!""    #=> true
`

Symbols are immutable

## Style guide:


- [Source Code Layout](https://github.com/rubocop-hq/ruby-style-guide#source-code-layout)
- [Naming](https://github.com/rubocop-hq/ruby-style-guide#naming)
- [Syntax](https://github.com/rubocop-hq/ruby-style-guide#syntax)
- [Collections](https://github.com/rubocop-hq/ruby-style-guide#collections)

[YARD](https://yardoc.org/) is a documentation generation tool for the Ruby programming language. 

**Proc** objects are blocks of code that have been bound to a set of local variables. Once bound, the code may be called in different contexts and still access those variables.

## Exercises

From [learn ruby the hard way](http://learnrubythehardway.org/book/)

**gets** lets the user input a line and returns it as a value to your program. This value includes the trailing line break. If you then call **chomp** on that value, this line break is cut off.

Is there a limit to the number of arguments a function can have?
It depends on the version of Ruby and the computer you're on, but it is fairly large. The practical limit though is about five arguments before the function becomes annoying to use.

## [OOP Exercises](https://launchschool.com/books/oo_ruby/read/the_object_model)

Another way to apply polymorphic structure to Ruby programs is to use a *Module*. Modules are similar to classes in that they contain shared behavior. However, you cannot create an object with a module. A module must be mixed in with a class using the include method invocation. This is called a **mixin**. After mixing in a module, the behaviors declared in that module are available to the class and its objects. A **module** is a collection of behaviors that is useable in other classes via **mixins**. A module is "mixed in" to a class using the include method invocation. 
````
# good_dog.rb

module Speak
  def speak(sound)
    puts sound
  end
end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

sparky = GoodDog.new
sparky.speak("Arf!")        # => Arf!
bob = HumanBeing.new
bob.speak("Hello!")         # => Hello!
````

```
# good_dog.rb

class GoodDog
  def initialize(name)
    @name = name
  end

  def name                  # This was renamed from "get_name"
    @name
  end

  def name=(n)              # This was renamed from "set_name="
    @name = n
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name            # => "Sparky"
sparky.name = "Spartacus"
puts sparky.name            # => "Spartacus"
```
Writing those getter and setter methods took up a lot of room in our program for such a simple feature. And if we had other states we wanted to track, like height or weight, the class would be even longer. Because these methods are so commonplace, Ruby has a built-in way to automatically create these getter and setter methods for us, using the **attr_accessor** method. Check out this refactoring of the code from above.

```
# good_dog.rb

class GoodDog
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name            # => "Sparky"
sparky.name = "Spartacus"
puts sparky.name            # => "Spartacus"
```

Our output is the same! The `attr_accessor` method takes a symbol as an argument, which it uses to create the method name for the *getter* and *setter* methods. That one line replaced two method definitions.

But what if we only want the getter method without the setter method? Then we would want to use the `attr_reader` method. It works the same way but only allows you to retrieve the instance variable. And if you only want the setter method, you can use the `attr_writer` method. All of the `attr_*` methods take a Symbol as parameters; if there are more states you're tracking, you can use this syntax:

`attr_accessor :name, :height, :weight`

## Notes

Avoid the use flip-flops
