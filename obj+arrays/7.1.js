const obj = {
  a: "apple",
  b: "banana",
  c: "kiwi",
};

let longest = "";

for (let key in obj) {
  if (obj[key].length > longest.length) {
    longest = obj[key];
  }
}

console.log(longest);
