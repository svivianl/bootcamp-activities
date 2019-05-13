require './question.rb'

class Game

  attr_reader :game_over

  @question = nil

  def initialize player1, player2
    @player1 = player1
    @player2 = player2
    @game_over = false
    @player1.turn = true
  end

  # return the name of the player
  def get_users_turn
    if @player1.turn == true
      @player1
    else
      @player2
    end
  end

  # question
  def ask
    @question = Question.new
    @question.to_s
  end

  def change_turn
    if @player1.turn == true
      @player1.turn = false
    else
      @player1.turn = true
    end
  end

  def is_answer_right? value
    # wrong answer
    if ! @question.is_answer_right? value

      if @player1.turn == true
        @player1.lives -= 1
        @game_over = game_over? @player1
      else
        @player2.lives -= 1
        @game_over = game_over? @player2
      end

      return false
    end

    return true
  end

  def game_over? player
    player.lives == 0
  end

  def winner
    if @player1.lives > @player2.lives
      @player1
    else
      @player2
    end
  end
end
