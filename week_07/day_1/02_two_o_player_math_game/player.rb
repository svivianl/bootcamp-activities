class Player

  attr_accessor :lives, :name, :turn

  def initialize name
    @name = name
    @lives = 3
    @turn = false
  end

  def to_s
    "#{@name}: #{@lives}/3"
  end
end
