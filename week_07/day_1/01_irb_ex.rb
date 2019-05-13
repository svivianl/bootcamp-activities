def say_hi (name)
  puts 'Hi, #{name}'
end

say_hi('Josh')

my_array = [5,3,7,2]
# doesn't changes array
my_array.sort

# changes array
my_array.sort!

an_array = ['Hello', 'nurse', 'and', 'world']
an_array.each { |word| puts word }
