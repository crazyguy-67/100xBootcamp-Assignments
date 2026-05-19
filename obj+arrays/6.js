const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const result = [];
const seen = {};

for (let item of arr) {
  if (!seen[item.id]) {
    result.push(item);
    seen[item.id] = true;
  }
}

console.log(result);
