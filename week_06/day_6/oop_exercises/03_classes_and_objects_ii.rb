#=================================================================
# Add a class method to your MyCar class that calculates the gas
# mileage of any car.
#
# Override the to_s method to create a user friendly print out of
# your object.
#=================================================================

class MyCar

  attr_accessor :color
  attr_reader :year

  def initialize(year, model, color)
    # instance attributes starts with @
    @year = year
    @color = color
    @model = model
    @current_speed = 0
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

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end

  def to_s
    "My car is a #{year}, #{color}, #{@model} !"
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
lumina.current_speed

lumina.color = 'black'
puts lumina.color
puts lumina.year

lumina.spray_paint('red')   #=> "Your new red paint job looks great!"

MyCar.gas_mileage(13, 351)  # => "27 miles per gallon of gas"

puts lumina
