require './player.rb'
require './game.rb'

puts "Player One's name: "
player1_name = gets.chomp
player1 = Player.new player1_name

puts "Player Two's name: "
player2_name = gets.chomp
player2 = Player.new player2_name

game = Game.new player1, player2

while !game.game_over
  puts "------ NEW TURN ------"
  player = game.get_users_turn
  puts "It is #{player.name}'s turn"

  puts game.ask
  answer = gets.chomp
  if game.is_answer_right? answer.to_i
    puts 'Correct!!!!!'
  else
    puts 'Wrong!!!!!'
  end

  game.change_turn

  puts "#{player1.to_s} vs #{player2.to_s}"
end

puts "------ GAME OVER ------"
winner = game.winner
puts "#{winner.name} wins with a score of #{winner.lives}/3 "
