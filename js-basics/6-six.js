const people = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

const grouped = {};

for (const person of people) {
  const city = person.city;

  if (!grouped[city]) {
    grouped[city] = [];
  }

  grouped[city].push(person.name);
}

console.log(grouped);
