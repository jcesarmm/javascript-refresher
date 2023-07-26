class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const user = new User("Manuel", 35);
console.log(user);

//arrays
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

console.log(hobbies);

const index = hobbies.findIndex((item) => {
  return item === "Cooking";
});
console.log(index);

console.log(transformToObjects(hobbies));

function transformToObjects(numberArray) {
  return numberArray.map((item) => ({ val: item }));
}
//destructor
const [firstname, lastname] = ["Julio", "Mont"];

console.log(firstname);

const { name, age } = { name: "max", age: 25 };
console.log(name);

//spread operator

const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];

console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user
};
console.log(extendedUser);
//for structure

for (const hobbie of hobbies) {
  console.log(hobbie);
}
//functions as values
function handleTimeout2() {
  console.log("Timeout 2");
}

const handleTimeout3 = () => {
  console.log("Timeout 3");
};

setTimeout(handleTimeout2, 1000);

setTimeout(handleTimeout3, 2000);

setTimeout(() => {
  console.log("Timeout 1");
}, 3000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi!"));
