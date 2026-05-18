const marks = {
  A: [80, 90],
  B: [70, 75, 85],
};

let highestStudent = "";
let highestAverage = 0;

for (const student in marks) {
  let total = 0;

  for (const mark of marks[student]) {
    total += mark;
  }

  const average = total / marks[student].length;

  if (average > highestAverage) {
    highestAverage = average;
    highestStudent = student;
  }
}

console.log(highestStudent);
