const orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];

const revenue = {};

for (let order of orders) {
  revenue[order.category] = (revenue[order.category] || 0) + order.price;
}

console.log(revenue);
