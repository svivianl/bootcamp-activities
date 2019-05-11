def inches_to_m(value)
  meters = value/39.370
  '%.2f' % meters
  return meters
end

def lbs_to_kg(value)
  return ( value/2.2046 ).to_int
end

name = 'Zed A. Shaw'
age = 35 # not a lie in 2009
height = 74 # inches
weight = 180 # lbs
eyes = 'Blue'
teeth = 'White'
hair = 'Brown'

# Let's talk about Zed A. Shaw
puts "Let's talk about %s." % name
# He's 74 inches tall.
puts "He's %d inches tall." % height
height_meters = inches_to_m height
puts "He's %.2f meters tall." % height_meters
# He's 180 pounds heavy.
puts "He's #{weight} pounds heavy."
weight_kg = lbs_to_kg weight
puts "He's #{weight_kg} pounds heavy."
puts "Actually that's not too heavy."
# He's got Blue eyes and Brown hair.
puts "He's got #{eyes} eyes and #{hair} hair."
# His teeth are usually White depending on the coffee.
puts "His teeth are usually #{teeth} depending on the coffee."

# this line is tricky, try to get it exactly right
# If I add 35, 74, and 180 I get 289."
puts "If I add #{age}, #{height}, and #{weight} I get #{age + height + weight}."
