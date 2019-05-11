#=================================================================
# Create a superclass called Vehicle for your MyCar class to inherit
# from and move the behavior that isn't specific to the MyCar class
# to the superclass. Create a constant in your MyCar class that
# stores information about the vehicle that makes it different from
# other types of Vehicles.
#
# Then create a new class called MyTruck that inherits from your
# superclass that also has a constant defined that separates it
# from the MyCar class in some way.
#
# Add a class variable to your superclass that can keep track of
# the number of objects created that inherit from the superclass.
# Create a method to print out the value of this class variable
# as well.
#
# Create a module that you can mix in to ONE of your subclasses
# that describes a behavior unique to that subclass.
#
# Print to the screen your method lookup for the classes that you
# have created.
#
# Move all of the methods from the MyCar class that also pertain
# to the MyTruck class into the Vehicle class. Make sure that all
# of your previous method calls are working when you are finished.
#
# Write a method called age that calls a private method to
# calculate the age of the vehicle. Make sure the private method
# is not available from outside of the class. You'll need to use
# Ruby's built-in Time class to help.
#=================================================================
module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end


class Vehicle

  attr_accessor :color
  attr_reader :model, :year
  @@number_of_vehicles = 0

  def initialize(year, model, color)
    # instance attributes starts with @
    @year = year
    @color = color
    @model = model
    @current_speed = 0
    @@number_of_vehicles += 1
  end

  def speed_up(number)
    @current_speed += number
    puts "You are accelerating: #{number} mph."
  end

  def brake(number)
    @current_speed -= number
    puts "You push the brake: #{number} mph."
  end

  def current_speed
    puts "You are going #{@current_speed} mph."
  end

  def shut_down
    @current_speed = 0
    puts "Shutting down"
  end

  def spray_paint(color)
    self.color = color
    puts "Your new #{color} paint job looks great!"
  end

  def self.number_of_vehicles
    puts "This program has created #{@@number_of_vehicles} vehicles"
  end

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end

  def age
    "Your #{self.model} is #{years_old} years old."
  end

  private

  def years_old
    Time.now.year - self.year
  end
end

class MyTruck < Vehicle

  include Towable

  NUMBER_OF_DOORS = 2

  def to_s
    "My truck is a #{self.year}, #{self.color}, #{self.model} !"
  end
end

class MyCar < Vehicle

  NUMBER_OF_DOORS = 4


  def to_s
    "My car is a #{self.year}, #{self.color}, #{self.model} !"
  end
end

lumina = MyCar.new(1997, 'chevy lumina', 'white')
lumina.speed_up(20)
lumina.current_speed
lumina.speed_up(20)
lumina.current_speed
lumina.brake(20)
lumina.current_speed
lumina.brake(20)
lumina.current_speed
lumina.shut_down
MyCar.gas_mileage(13, 351)
lumina.spray_paint("red")

Vehicle.gas_mileage(13, 351)  # => "27 miles per gallon of gas"

puts lumina

Vehicle.number_of_vehicles

puts 'MyCar ancestors ---------------------------------'
puts MyCar.ancestors
puts 'MyTruck ancestors ---------------------------------'
puts MyTruck.ancestors
puts 'Vehicle ancestors ---------------------------------'
puts Vehicle.ancestors

puts 'end of ancestors ---------------------------------'
puts lumina.age


