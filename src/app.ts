class Pizza {
  toppings: string[] = [];

  constructor(private name: string, readonly price: number) {}

  addToppings(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni", 15);
pizza.addToppings("pepperoni");

console.log(pizza.price);
