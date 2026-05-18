const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = {};

for (const fruit of fruits) {
  count[fruit] = (count[fruit] || 0) + 1;
}

console.log(count);
