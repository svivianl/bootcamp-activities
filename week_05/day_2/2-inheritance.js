
// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, age) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.age = age;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}


const student1 = new Student('Viviane', 'loves chocolate', 24);
const mentor1 = new Mentor('Julio', 'loves taking pictures', 25);
const person1 = new Person('Ana', 'loves dancing', 20);

student1.enroll('course1');
mentor1.goOffShift();

console.log(`${student1.getName()} ${student1.getAge()}`);
console.log(`${mentor1.getName()} ${mentor1.getAge()}`);
