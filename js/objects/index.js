const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "swimming"],
};

console.log(person.name);
console.log(person["age"]);

console.log("Object.keys", Object.keys(person));
console.log("Object.values", Object.values(person));
console.log("Object.entries", Object.entries(person));
