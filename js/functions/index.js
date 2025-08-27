//*****************************
function sayHello() {
  console.log("Hello!");
}
sayHello();
//*****************************
function sayHelloPerson(name) {
  return "Hello " + name;
}
const greeting = sayHelloPerson("Nigel");
console.log(greeting);
//*****************************

const shoppingList = ["Milk", "Eggs", "Tea", "Beer", "Sugar", "Coffee"];

function findCoffee(thingName) {
  console.log(thingName);
  return thingName === "Coffee";
}

//array.find(pass in a callback function) - this means the array will iterate each element, passing each element into the function and stop when the function returns true
const coffee = shoppingList.find(findCoffee); //note that findCoffee is passed in.. not calling it as that would look like findCoffee() with the parenthesis

console.log(coffee);
