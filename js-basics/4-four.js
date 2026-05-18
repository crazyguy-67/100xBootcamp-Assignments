const obj = {
  a: 10,
  b: 50,
  c: 20,
};

let maxKey = "";
let maxValue = -Infinity;

for (const key in obj) {
  if (obj[key] > maxValue) {
    maxValue = obj[key];
    maxKey = key;
  }
}

console.log(maxKey);
