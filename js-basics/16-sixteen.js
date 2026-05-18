const arr = [1, 2, 3, 4, 5, 6];

const result = {
  even: 0,
  odd: 0,
};

for (const num of arr) {
  if (num % 2 === 0) {
    result.even++;
  } else {
    result.odd++;
  }
}

console.log(result);
