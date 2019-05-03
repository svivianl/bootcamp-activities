/*
  1- create a new object
  2- set the prototype
  3- execute the constructor with "this"
  4- return the createdobject
 */
function Person(saying) {
  this.saying = saying
}

Person.prototype.talk = function() {
  console.log('I say:', this.saying)
}

function spawn(constructor) {
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  var argsArray = Array.prototype.slice.apply(arguments)
  return constructor.apply(obj, argsArray.slice(1)) || obj
}

var crockford = spawn(Person, 'SEMICOLANS!!!1one1')
crockford.talk()
