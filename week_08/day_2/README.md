# Testing Rails
    
  - [database cleaner](https://thoughtbot.com/blog/how-we-test-rails-applications#database-cleaner)
    - use the file [database_cleaner.rb](https://gist.github.com/jsteiner/8362013)
    - more references [here](https://github.com/DatabaseCleaner/database_cleaner)
  - Capybara
    Feature specs, a kind of acceptance test, are high-level tests that walk through your entire application ensuring that each of the components work together. They’re written from the perspective of a user clicking around the application and filling in forms. We use RSpec and Capybara, which allow you to write tests that can interact with the web page in this manner.
  - Poltergeist
    Poltergeist is a driver for Capybara. It allows you to run your Capybara tests on a headless PhantomJS browser. If you would like to run your tests on headless Chrome there's another project Cuprite claims to be compatible with Poltergeist.
    - Phantomjs (npm)

# Lecture Notes

- headless chrome: does not have UI
- FactoryBot: `spec/factories/`
  - factory: the model attribute is created once as *speed*. If you want to make it be created everytime you call the model, you need to reated it using {} as *style*
  ```
  factory :bicycle do
    model "Model"
    colour "Red"
    speeds 1
    style { Style.new(name: "Style") }
    brand { Brand.new(name: "Brand X", country: "Countrystan") }
  ```
  - has the same methods as the Active Record: new, create...
  - trait: customizes the factory
  - folder features: in the *scenario*, put the *screenshot* before the *expectations* because otherwise, if the test fails, it will not save the screenshot
- to run the tests, you do not need to run the application. The test will run an integration server
- `bin/rspec [name of the path (folders)]`
- tmp/capybara: to see the screenshot
- Code coverage: tells you how much of your code had been tested
- Code climate: tells if you need to refact
- CircleCI/jenkins
