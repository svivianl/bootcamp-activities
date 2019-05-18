# Requirements

## Technical Requirements
  
  **Front-end:**
  Rails

  **Back-end:**
  Ruby, ActiveRecord, Postgre, SQL

## Functional Requirements

### Feature: Sold Out Badge

  - When a product has 0 quantity, a sold out badge should be displayed on the product list page
  - Should ideally be implemented as a question/boolean method in view helper and/or Product model
  
### Feature: Admin Categories

  - Admin users can list and create new categories
  - Admins can add new products using the new category
  - Restful routes (resources) should be used, and there should be no extra, unused routes exposed
  - All admin controllers inherit from Admin::BaseController (or similarly named) abstract controller, containing the authentication filter
  
### Feature: User Authentication

  - As a Visitor I can go to the registration page from any page in order to create an account
  - As a Visitor I can sign up for a user account with my e-mail, password, first name and last name
  - As a Visitor I can sign in using my e-mail and password
  - As a User I can log out from any page
  - As a User I cannot sign up with an existing e-mail address (uniqueness validation)
  - Passwords are not stored as plain text in the database. Instead, has_secure_password is used in the User model, leveraging the bcrypt gem

### Order Details Page

  - The order page contains items, their image, name, description, quantities and line item totals
  - The final amount for the order is displayed
  - The email that was used to place the order is displayed
  - As a Visitor I can place an order (i.e. without logging in and therefore without an e-mail address). The original functionality from the inherited code (even though it is not realistic) should therefore not be suppressed.
  
### Feature: Email Receipt

  - The e-mail content should be (minimally) formatted with HTML. It does not need any layout styling and should be mostly, if not all, text (i.e. make do with `<p>, <hr>, <h1>, <br>` and other simple formatting tags). Since you don't know their name information, it can just have a generic greeting
  - It should list the total as well as each line item in the order
  - The Order ID should be in the subject line
  
### Bug:Missing Admin Security

  - User must enter HTTP auth login/password to access admin functionality
  - Should ideally be implemented in an abstract top-level class for admin controllers (e.g., Admin::BaseController which the other concrete admin controllers inherit)
  
### Bug:Checking Out with Empty Cart

  - When the cart is empty and the user goes to the carts#show page, instead of displaying the contents and a stripe checkout button, display a friendly message about how it is empty and link to the home page
  
### Feature: Product Rating

  - Use of nested resources in the routing, and not using custom controller actions
  - As a visitor I can view the overall rating of products as I browse the catalog
  - As a visitor I can view the list of ratings and reviews when viewing the product detail
  - As a logged in user I can rate & review a product in a single step
  - As a logged in user I can delete a rating or review that I previously created
