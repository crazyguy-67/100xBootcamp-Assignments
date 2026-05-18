const obj = {
  a: 3,
  b: 1,
  c: 2,
};

const result = Object.entries(obj).sort((entry1, entry2) => {
  return entry1[1] - entry2[1];
});

console.log(result);
