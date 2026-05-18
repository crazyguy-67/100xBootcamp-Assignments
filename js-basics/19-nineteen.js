const obj = {
  a: 1,
  b: "hello",
  c: 3,
};

let result = true;

for (const key in obj) {
  if (typeof obj[key] !== "number") {
    result = false;
    break;
  }
}

console.log(result);
