//callback arrow syntax
//write this then refactor ???:
const shoppingList = ["Milk", "Eggs", "Tea", "Beer", "Sugar", "Coffee"];
const findMilk = (thing) => {
  return thing === "Milk";
};
const bread = shoppingList.find(findMilk);
console.log(bread);
