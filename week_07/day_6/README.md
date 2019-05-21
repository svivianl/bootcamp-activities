# RSpec

[RSPEC](http://blog.teamtreehouse.com/an-introduction-to-rspec) is a testing library

Treehouse has an introductory article on testing with RSpec. Beware that it uses the old should *syntax* instead of the new *expect* syntax which is used in the examples below.

## `bundle exec rspec`
````
require_relative '../lib/string_calculator.rb'

describe StringCalculator do

  describe ".add" do

    context "given an empty string" do
      it "returns zero" do
        expect(StringCalculator.add("")).to eql(0)
      end
    end

    context "given '4'" do
      it "returns 4" do
        expect(StringCalculator.add("4")).to eql(4)
      end
    end

    context "given '10'" do
      it "returns 10" do
        expect(StringCalculator.add("10")).to eql(10)
      end
    end

    context "two numbers" do
      context "given '2,4'" do
        it "returns 6" do
          expect(StringCalculator.add("2,4")).to eql(6)
        end
      end

      context "given '17,100'" do
        it "returns 117" do
          expect(StringCalculator.add("17,100")).to eql(117)
        end
      end
    end
  end
end
````

The below code block can also be written using dot notation by running the command line `$ bundle exec rspec --format documentation` which will create the folder `.bundle`.
````
require_relative '../lib/string_calculator.rb'

StringCalculator
  .add
    given an empty string
      returns zero
    single numbers
      given '4'
        returns 4
      given '10'
        returns 10
    two numbers
      given '2,4'
        returns 6
      given '17,100'
        returns 117
````
And run te test using the command line `bundle exec rspec`


## Mocks and Stubs

Used to test APIs

### Mocks

Are a type of Stub and are more specifics than Stubs.

### Stubs
