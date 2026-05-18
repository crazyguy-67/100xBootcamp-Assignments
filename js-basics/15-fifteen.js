const obj = {
  name: "Alice",
  age: 25,
};

const result = Object.entries(obj)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");

console.log(result);
