"use strict";
const pizza = {
  name: "Harry Potter",
  price: 15,
  getName() {
    return pizza.name;
  },
};

console.log(pizza.getName());

const toppings = ["pepperoni"];

const order = { pizza, toppings };

console.log(order);

function createOrder(pizza, toppings) {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
