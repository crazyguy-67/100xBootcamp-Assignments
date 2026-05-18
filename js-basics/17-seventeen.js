const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  b: 4,
  c: 5,
  d: 6,
};

const result = [];

for (const key in obj1) {
  if (key in obj2) {
    result.push(key);
  }
}

console.log(result);
