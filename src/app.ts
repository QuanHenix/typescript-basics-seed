let pizza: string | undefined | null = "pepperoni";

function changePizzaName(newPizza: string): any {
  pizza = null;
}

console.log(changePizzaName("mageritta"));
