const film = {
  name: "Harry Potter",
  mainChar: "Harry Potter",
};

const friends = ["Ron Weasley", "Hermione Granger"];

const allActors = { ...film, friends };

const finalActors = { ...allActors };

// console.log(allActors);
// console.log(finalActors);

const assignObject = Object.assign({}, film, { friends });
console.log(assignObject);

const spreadObject = { ...film, friends };
console.log(spreadObject);
