# Active Record

Active Record (AR) was developed as part of Rails with the specific purpose of defining Database Models to allow the web app to easily work with a SQL database using Classes.

## Callbacks

With callbacks it is possible to write code that will run whenever an Active Record object is created, saved, updated, deleted, validated, or loaded from the database.

`after_save` runs both on create and update, but always after the more specific callbacks `after_create` and `after_update`, no matter the order in which the macro calls were executed.

`before_destroy` callbacks should be placed before `dependent:` `:destroy` associations (or use the `prepend: true` option), to ensure they execute before the records are deleted by `dependent: :destroy`.
