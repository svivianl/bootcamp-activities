"use strict";

/* Question 06

Below is an object that contains contact information. We want to construct a function that will take in
three parameters. The first parameter is the data itself, the second is the name of a contact, and the
third parameter will be specifying either 'phone' or 'email'. The function will take these parameters and
return the name and specified field of the first friend listed in the contact's friends list. So, using
the data below and specifying "Laurel" as the first parameter and "email" as the second would look at
Laurel's friends list, and return the name "Hardy" and Hardy's e-mail address.

>> Note: The contact data provided below is an example of the structure and complexity of the data this
function should support. It is here as a reference, and should be used to test your function. The test
data will have a similar structure.

Examples:

- findFriend(contacts, "Abbott", "phone")       returns {name: "Costello", phone: "767 676 7676"}
- findFriend(contacts, "Buster", "email")       returns {name: "Hardy", email: "hardy@hardyharhar.com"}
- findFriend(contacts, "Bob", "phone")          returns "Not found"
- findFriend(contacts, "Costello", "birthday")  returns "Not found"

*/

/********************
 *  DO NOT CHANGE   *
 ********************/

var contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

/* You should be changing this code */
function getPerson(data, name){

  for(var i = 0; i < data.length; i++ ){
    if( data[i].name === name ){
      return data[i];
    }
  }

  return -1;
}

function findFriend(data, name, field) {

  let returnContact = {};

  // find person
  let person = getPerson(data, name);

  // found the person
  if(person !== -1){
    let foundContact = getPerson(data, person.friends[0]);

    //found contact
    if(foundContact !== -1 && foundContact.hasOwnProperty(field)){
      returnContact.name = foundContact.name;
      returnContact[field] = foundContact[field];
      return returnContact;
    }
  }

  return 'Not found';
}


// Don't change below:

module.exports = { findFriend };
