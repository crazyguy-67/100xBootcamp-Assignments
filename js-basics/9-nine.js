const obj = {
  x: [1, 2, 3],
  y: [2, 3, 4],
  z: [4, 5],
};

const uniqueValues = new Set();

for (const key in obj) {
  for (const value of obj[key]) {
    uniqueValues.add(value);
  }
}

console.log([...uniqueValues]);
// Spread operator converts Set into array:
