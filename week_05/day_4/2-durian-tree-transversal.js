class Employee {

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this.name;
  }

  get numberOfSubordinates(){
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    this._totalEmployees = 1; // 1

    // Use depth first traversal to calculate the total employees
    for (const subordinate of this.subordinates) {
      this._totalEmployees += subordinate.totalEmployees;
    }

    return this._totalEmployees;
  }

}

// ceo
const ada       = new Employee("Ada", "CEO", 3000000.00);

// vps
const craig     = new Employee("Craig", "VP Software", 1000000);
const arvinder  = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela    = new Employee("Angela", "VP Retail", 1000000);
const phil      = new Employee("Phil", "VP Marketing", 1000000);

// insert ada's subordinates
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

// employees
const simone    = new Employee('Simone', 'position1', 50000);
const ali       = new Employee('Ali', 'position2', 3000);
const florida   = new Employee('Florida', 'position3', 20000);
const david     = new Employee('David', 'position4', 2000);
const brian     = new Employee('Brian', 'position5', 1000);
const karla     = new Employee('Karla', 'position6', 20000);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);


const sarah         = new Employee('Sarah', 'position1', 50000);
const andrew        = new Employee('Andrew', 'position2', 3000);
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);

console.log(`Can you tell me who Craig's boss is? ${craig.boss}`);
console.log(`How about the number of his subordinates? ${craig.numberOfSubordinates}`);
console.log(`How many people are there in between Craig and the CEO? ${craig.numberOfPeopleToCEO}`);

console.log(`employee under Ada, that makes over $418,401 a year ${ada.employeesThatMakeOver(418401).length}`);
console.log(`total number of employees in the entire company ${ada.totalEmployees}`); // Returns the total number of employees in the entire company.
console.log(`number of employees working in software development ${craig.totalEmployees}`); // Returns the total number of employees working in software development.
