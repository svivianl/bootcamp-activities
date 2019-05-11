# Prototypes

Prototypes are responsible for defining the behaviour of instances. prototypes don’t have special methods or properties.

Instance (aka object) behaviour in JavaScript is defined by modifying the prototype directly, e.g. by adding functions to it as properties. There is no special syntax for defining a class or modifying a class.**

* Functions can have prototypes.
* Prototypes hold instance methods.
* Instances are new copies of the constructor function.

So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a constructor function does.

`
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
`

Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype. You can overwrite it with a new object if you want. Or you can add properties to the existing object, as the example does.

By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.

Like function, class can be used both in statements and in expressions. When used as an expression, it doesn’t define a binding but just produces the constructor as a value. You are allowed to omit the class name in a class expression.

`
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
`

To check if the attribute is in the object

`
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};
console.log("Is Jack's age known?", "Júlia" in ages);
`

`Object.create(null)`, the resulting object will not derive from Object.prototype and can safely be used as a map.

Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—such as objects—you cannot use an object as your map.

Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.

The methods set, get, and has are part of the interface of the Map object. 

When you call the String function (which converts a value to a string) on an object, it will call the toString method on that object to try to create a meaningful string from it.
`
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
// → a black rabbit
`

[Symbol](https://www.youtube.com/watch?v=PyyndIv4ABI) is a primitive data type. It was created so you can iterate though an object.
Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

ECMAScript is a subset of JavaScript.
There are other and better ways of making an attribute private this such as using Symbols and Weak Maps, both of which are ES6 features. 

Properties of an object are looked up from two places:

- the object itself (Obj.foo), and
- if the property does not exist, on the prototype of the object (Obj.prototype.foo).
**Important**: since this lookup is performed recursively (e.g. Obj.foo, Obj.prototype.foo, Obj.prototype.prototype.foo), each object can be said to have a prototype chain.

# Lecture Notes

[Elastic Search](https://www.elastic.co/)
A JS object is a has/map is a key-value pair: `const myCar = {}`
A function ia a *first class citizen*. To be a first class citizen it has to:
- assign to a variable
- pass to a function
- return from a function
An instance has a property called __proto__ and a class has a property called prototype. `instance.__proto__ === class.prototype`
