# $ ruby 13_parameters_unpacking_variables.rb stuff things that

first, second, third = ARGV

puts "The script is called: #{$0}"
puts "Your first variable is: #{first}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"

puts "give me more params to use $stdin.gets.chomp"
param = $stdin.gets.chomp
puts "param is #{param}, first #{first}"
