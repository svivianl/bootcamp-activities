# Ask the user for input on the weather!



puts "Please enter the weather:"
puts "1 - cold"
puts "2 - raining"
puts "3 - other"

# Use chomp to get the user input



weather = gets.chomp

# If the weather is "cold"...



if weather == 1.to_s
 puts "take a jacket" 


# If the weather is "raining"...



elsif weather == 2.to_s
 puts "take an umbrella"

# If it is neither...
else
 puts "enjoy your day"
end