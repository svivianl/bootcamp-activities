# Authentication

[bcrypt](https://medium.com/@ashleymcolletti/add-authentication-to-your-rails-app-with-bcrypt-a53917252159) and [authentication](https://gist.github.com/thebucknerlife/10090014)

[Send e-mail](https://edgeguides.rubyonrails.org/action_mailer_basics.html) check this [tutorial](https://richonrails.com/articles/action-mailer-previews-in-ruby-on-rails-4-1).

to use HTTP Basic Authentication:
`
http_basic_authenticate_with name: ENV['ADMIN_USERNAME'].to_s, password: ENV['ADMIN_PASSWORD'].to_s
`

[view helpers](https://guides.rubyonrails.org/v4.2/action_view_overview.html)

# Lecture Notes

`resource` does not create index
`resources` creates index
`authentic_token` makes sure you are in the webpage and not accessing from an API when you submit the form

## [to_param()](https://api.rubyonrails.org/classes/ActiveRecord/Integration.html)

Returns a *String*, which Action Pack uses for constructing a URL to this object. The default implementation returns this record's id as a *String*, or *nil* if this record's unsaved.

For example, suppose that you have a User model, and that you have a resources :users route. Normally, user_path will construct a path with the user object's 'id' in it:

`
user = User.find_by(name: 'Phusion')
user_path(user)  # => "/users/1"
`

You can override to_param in your model to make user_path construct a path using the user's name instead of the user's id:
````
class User < ActiveRecord::Base
  def to_param  # overridden
    name
  end
end

user = User.find_by(name: 'Phusion')
user_path(user)  # => "/users/Phusion"
````

## View helpers

To make a new folder that you have created load when the application starts, you need to
`config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]`
in the method
`
module Jungle
  class Application < Rails::Application
`
of the /config/application.rb file
/app/controllers/application_controller.rb is the where you can insert a variable and it can be seen everywhere
