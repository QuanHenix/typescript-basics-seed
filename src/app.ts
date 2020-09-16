//object destructuring
const pizza = {
  name: "pepperoni",
  toppings: ["pepperoni"],
};

function order({ name: newName, toppings: newToppings }) {
  return { newName, newToppings, price: 14 };
}

// console.log(order(pizza).price);

const { price } = order(pizza);
// console.log(price);

//array destructuring
const topppings = ["pepperoni", "bacon", "chili"];

const [a, b, c] = topppings;
console.log(a, b, c);

function logToppings([a, b, c]: any) {
  console.log(a, b + c);
}

logToppings(topppings);
