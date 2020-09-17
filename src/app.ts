class Size {
  constructor(public sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(newSize: string[]) {
    this.sizes = newSize;
  }
}

let size = new Size(["small", "medium"]);

console.log(size.availableSizes);

size.availableSizes = ["small", "medium", "large"];

console.log(size.availableSizes);

console.log(size.sizes);

size.sizes = ["extra-big"];

console.log(size.sizes);
