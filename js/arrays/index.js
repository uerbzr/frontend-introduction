const names = ["Alice", "Bob", "Charlie"];
console.log(names);
console.log("0", names[0]);
console.log("last", names[names.length - 1]);

names.push("Diana");
names.unshift("Zara");

console.log(names);
