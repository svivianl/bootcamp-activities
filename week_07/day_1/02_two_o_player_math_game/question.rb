class Question

  attr_reader :first_number, :second_number

  def initialize
    @first_number = rand(0...10)
    @second_number = rand(0...10)
  end

  def is_answer_right? value
    value == @first_number + @second_number
  end

  def to_s
    "What does #{@first_number} plus #{@second_number} equal?"
  end
end
