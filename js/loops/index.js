const shoppingItems = [
  { name: "milk", inBasket: false },
  { name: "bread", inBasket: false },
  { name: "beer", inBasket: false },
];

console.log("Before Shop", shoppingItems);
for (let i = 0; i <= shoppingItems.length - 1; i++) {
  shoppingItems[i].inBasket = true;
}
console.log("After Shop", shoppingItems);
