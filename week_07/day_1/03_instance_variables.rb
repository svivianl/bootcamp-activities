class Person

  # getter:
  #   attr_reader
  # setter:
  #   attr_writer
  attr_accessor :name

  def initialize(name)
    @name = name
  end

end

p = Person.new('L. Ron')
puts p.name
p.name = "New Name"
puts p.name
