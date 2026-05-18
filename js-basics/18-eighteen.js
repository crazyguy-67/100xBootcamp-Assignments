const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const result = {};

for (const item of arr) {
  result[item.id] = item;
}

console.log(result);
