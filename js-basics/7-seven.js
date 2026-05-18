const obj = {
  a: 20,
  b: 60,
  c: 40,
  d: 90,
};

const result = {};

for (const key in obj) {
  if (obj[key] > 50) {
    result[key] = obj[key];
  }
}

console.log(result);
