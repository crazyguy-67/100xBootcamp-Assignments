const items = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];

const result = {};

for (let item of items) {
  if (!result[item.category]) {
    result[item.category] = [];
  }

  result[item.category].push(item.id);
}

console.log(result);
