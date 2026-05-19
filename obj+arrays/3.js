const obj = {
  a: 0,
  b: null,
  c: "hello",
  d: undefined,
  e: 5,
};

const result = {};

for (let key in obj) {
  if (obj[key]) {
    result[key] = obj[key];
  }
}

console.log(result);
