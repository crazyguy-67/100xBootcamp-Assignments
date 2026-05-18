const transactions = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];

const result = {};

for (const transaction of transactions) {
  if (result[transaction.user]) {
    result[transaction.user] += transaction.amount;
  } else {
    result[transaction.user] = transaction.amount;
  }
}

console.log(result);
