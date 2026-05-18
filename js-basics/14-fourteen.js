const obj = {
  name: "alice",
  city: "delhi",
};

const result = {};

for (const key in obj) {
  result[key] = obj[key][0].toUpperCase() + obj[key].slice(1);
}

console.log(result);
