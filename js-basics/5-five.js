const obj = {
  fruits: ["apple", "banana"],
  veggies: ["carrot", "pea"],
};

const result = [];

for (const key in obj) {
  result.push(...obj[key]);
}

console.log(result);
