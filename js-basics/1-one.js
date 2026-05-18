const expenses = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

const result = {};

for (const key in expenses) {
  result[key] = expenses[key].reduce((sum, val) => sum + val, 0);
}

console.log(result);
