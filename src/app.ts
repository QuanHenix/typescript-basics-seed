abstract class Size {
  constructor(protected sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(newSize: string[]) {
    this.sizes = newSize;
  }
}

class Pizza extends Size {
  constructor(private name: string, sizes: string[]) {
    super(sizes);
  }

  updateSize(newSize: string[]) {
    this.sizes = newSize;
  }
}

const pizza = new Pizza("pepperoni", ["large", "small"]);
console.log(pizza.availableSizes);

pizza.availableSizes = ["small", "medium", "large"];

console.log(pizza.availableSizes);

pizza.updateSize(["extra-big-only"]);

console.log(pizza.availableSizes);
