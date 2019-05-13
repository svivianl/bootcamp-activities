# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'

candidate_1 = find 1
candidate_11 = find 11
candidate_7 = find 7
candidate_7_experienced = experienced? candidate_7
candidate_11_experienced = experienced? candidate_11

# puts "candidate id 1 is #{candidate_1}"
# puts "--------------------------------------------"
# puts "candidate id 11 is #{candidate_11}"
# puts "--------------------------------------------"
# puts "candidate id 7 is experienced? #{candidate_7_experienced}"
# puts "--------------------------------------------"
# puts "candidate id 11 is experienced? #{candidate_11_experienced}"
puts "--------------------------------------------"
puts "qualified_candidates:"
puts qualified_candidates @candidates
# puts "--------------------------------------------"
# puts "ordered_by_qualifications:"
# puts ordered_by_qualifications @candidates

# binding.pry

# 1) What does the pp method do? How is it different from puts (try it out!)?
# identation
#
# pp @candidates
# puts @candidates
# 2) Why is ActiveSupport being used (what happens if we take it out)?
# to call the object days
#
# 3) What is pry and how is it different than irb?
# Pry is a runtime developer console and IRB alternative with powerful
# introspection capabilities. Pry aims to be more than an IRB replacement.
# It is an attempt to bring REPL driven programming to the Ruby language.
