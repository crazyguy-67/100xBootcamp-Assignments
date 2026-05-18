const obj = {
  a: "x",
  b: "y",
  c: "z",
};

const swapped = {};

for (const key in obj) {
  swapped[obj[key]] = key;
}

console.log(swapped);
