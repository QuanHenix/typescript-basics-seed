interface Sizes {
  sizes?: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings: number;
  getToppings(): number;
  [key: number]: string | number;
}

let pizza: Pizza;

function createPizza(name: string, topping: number, sizes: string[]): Pizza {
  return {
    name: name,
    toppings: topping,
    // sizes: sizes,
    getToppings() {
      return this.toppings;
    },
  };
}

pizza = createPizza("pepperoni", 5, ["large", "medium"]);
console.log(pizza.getToppings());

pizza[1] = "abc";
