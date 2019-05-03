class Pizza {

  constructor(size, crust) {
    this._size = size;
    this._crust = crust;
    this._toppings = ["cheese"];
  }

  addTopping(topping) {
    this._toppings.push(topping);
  }

    // setSize now includes data validation
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }

  getSize() {
    return this._size;
  }

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];

let pizza = new Pizza('large', 'thin');
// pizza.setSize('s');
// pizza.getPrice();
pizza.price;
pizza.size = 's';

// console.log()
