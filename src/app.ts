const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizza = pizzas.map(function (pizza) {
  return pizza.name.toUpperCase();
});

console.log(mappedPizza);
