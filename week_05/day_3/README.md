# Single Responsibility Principle

The single responsibility principle states that a class should be responsible for a single part of the app's functionality, giving it only one reason to change. Or more simply, a class should only have one job.


# new

1- create a new object
2- set the prototype
3- execute the constructor with "this"
4- return the createdobject

# __proto__ vs prototype

## __proto__

Delegation
Property on an object actually points out the prototype that has been set for that object

## prototype

When creating an object
Pototype is a property on a function and it's only function that has this property that is set as the property if you're using the new keyword

# Object.create()

Creates a new object with the prototype set to a certain object

1- create an object
2- set the prototype of the object
3- return the object

It is better for performance

# Recursion

Use recursion to reduce the complexity of a problem at hand.
The unknown number of nested loops is a common characteristic of all problems that are recursive in their nature and should give you a hint that recursive solution is required.

`
1.| function countEvenToTwelve(number) {
2.|   if (number <= 12) { // Recursive Case
3.|     console.log(number);
4.|     // The function will call itself again and get closer to the base case
5.|     countEvenToTwelve(number+2);
6.|   }
7.|   // Base case, do nothing when number > 12
8.| }
9.| countEvenToTwelve(0);
`
Recursion is a tool you can use as an alternative to traditional iteration using for and while loops.

Every recursive function must have a base case and a recursive case.
Each recursive call should break down the current problem into a smaller, simpler one.
The recursive calls must eventually reach the smallest version of the problem, the base case.
The base case is when the problem can be solved without further recursion.

A recursive function doesn't need a base case. A recursive case is all a function needs to be recursive.

Every recursive function **must** stop calling itself at some point, otherwise it will just continue to call itself forever, like an infinite loop.
