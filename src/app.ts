type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: "Harry Potter", toppings: 5 };

const jsonPizza = JSON.stringify(pizza);

console.log(pizza);
console.log(jsonPizza);

function getNameFromJSON(obj: string): string {
  return (<Pizza>JSON.parse(obj)).name;
}

console.log(getNameFromJSON(jsonPizza));
