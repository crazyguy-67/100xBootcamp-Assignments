const obj = {
  name: "Rahul",
  age: 23,
  city: "Noida",
};

const keys = ["name", "city"];

const result = {};

for (const key of keys) {
  result[key] = obj[key];
}

console.log(result);

// for (const key in keys)

// gives indexes:
