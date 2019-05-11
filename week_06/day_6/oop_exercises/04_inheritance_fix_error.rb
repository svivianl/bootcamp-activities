#=================================================================
# Create a class 'Student' with attributes name and grade. Do NOT
# make the grade getter public, so joe.grade will raise an error.
# Create a better_grade_than? method, that you can call like so...
#
# Given the following code...
#
# bob = Person.new
# bob.hi
# And the corresponding error message...
#
# NoMethodError: private method `hi' called for #<Person:0x007ff61dbb79f0>
# from (irb):8
# from /usr/local/rvm/rubies/ruby-2.0.0-rc2/bin/irb:16:in `<main>'
# What is the problem and how would you go about fixing it?
#=================================================================

class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end

class Studendt < Person
  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def better_grade_than?(other_student)
    grade > other_student.grade
  end

  protected

  def grade
    @grade
  end
end

bob = Studendt.new('Bob', 3)
joe = Studendt.new('Joe', 4.5)
puts "Well done!" if joe.better_grade_than?(bob)
# bob.hi
