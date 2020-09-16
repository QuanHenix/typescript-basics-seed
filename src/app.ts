type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;

let size: Size = "small";

console.log(size);
const makeSize = (newSize: Size): void => {
  size = newSize;
};

makeSize("medium");
console.log(size);

const selectSize: Callback = (x) => (size = x);

selectSize("large");
console.log(size);
