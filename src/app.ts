let addSum = (price: number, number: number): number => {
  return price * number;
};

let addSum2: (price: number, number: number) => number;
addSum2 = (x, y) => x + y;

console.log(addSum(20, 5));
console.log(addSum2(20, 5));
