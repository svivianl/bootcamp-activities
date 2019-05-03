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


console.log(`Can you tell me who Craig's boss is? ${craig.boss}`);
console.log(`How about the number of his subordinates? ${craig.numberOfSubordinates}`);
console.log(`How many people are there in between Craig and the CEO? ${craig.numberOfPeopleToCEO}`);
