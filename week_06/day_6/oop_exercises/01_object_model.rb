#=============================================
# create a class
#=============================================
class MyFirstClass
end

my_obj = MyFirstClass.new

#=============================================
# create a module
#=============================================

module MyModule
end

class MySecondClass
  include MyModule
end

my_obj2 = MySecondClass.new
