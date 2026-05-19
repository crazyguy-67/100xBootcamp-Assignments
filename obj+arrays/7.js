const obj = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;

const entries = Object.entries(obj);
const result = [];

for (let i = 0; i < entries.length; i += size) {
  const chunk = entries.slice(i, i + size);
  result.push(Object.fromEntries(chunk));
}

console.log(result);

// Object.entries(obj)
// converts the object into an array of key-value pairs:
// Then we take size items at a time:

// entries.slice(i, i + size)

// For size = 2, the chunks are:

// [["a", 1], ["b", 2]]
// [["c", 3], ["d", 4]]

// Finally:

// Object.fromEntries(chunk)

// converts each chunk back into an object.
