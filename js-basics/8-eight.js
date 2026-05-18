const students = {
  A: [80, 90],
  B: [70, 75, 85],
};

let topStudent = "";
let highestAverage = 0;

for (const student in students) {
  const marks = students[student];

  const total = marks.reduce((sum, mark) => sum + mark, 0);

  const average = total / marks.length;

  if (average > highestAverage) {
    highestAverage = average;
    topStudent = student;
  }
}

console.log(topStudent);
