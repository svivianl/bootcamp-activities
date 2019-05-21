require_relative 'boat'

# The code describe Boat tells RSpec what code you're writing tests for.
describe Boat do

  # success
  it 'should create boats' do
    expect(Boat.new).to be_a Boat
  end

  # # fail
  # it 'should create boats' do
  #   expect(Boat.new).to be_a Hash
  # end

  # The # indicates that allowed_aboard? is an instance method of Boat.
  describe '#allowed_aboard?' do
     it 'returns true if inventory includes a life jacket' do
      a_boat = Boat.new
      allowed = a_boat.allowed_aboard?(['life jacket', 'sun glasses'])
      expect(allowed).to be true
    end

    it 'returns false if inventory does not include a life jacket' do
      a_boat = Boat.new
      allowed = a_boat.allowed_aboard?(['swim trunks', 'flippy floppies'])
      expect(allowed).to be false
    end
  end
end
