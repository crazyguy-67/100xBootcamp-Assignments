const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const result = {};

for (let user of users) {
  result[user.id] = user.name;
}

console.log(result);
