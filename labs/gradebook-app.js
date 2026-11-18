function getAverage(arr) {
  let sum = 0;
  for (let score of arr) {
    sum += score;
  }
  return sum / arr.length;
}

function getGrade(score) {
  switch (true) {
    case score >= 0 && score <= 59:  return "F";
    case score >= 60 && score <= 69: return "D";
    case score >= 70 && score <= 79: return "C";
    case score >= 80 && score <= 89: return "B";
    case score >= 90 && score <= 99: return "A";
    case score === 100: return "A+";
    default: return "Invalid";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(arr, score) {
  const average = getAverage(arr);
  const grade = getGrade(score);
  const status = hasPassingGrade(score) ? "passed" : "failed";
  
  return `Class average: ${average}. Your grade: ${grade}. You ${status} the course.`;
}

// Tests
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4
console.log(getGrade(100)); // A+
console.log(hasPassingGrade(78)); // true
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); // Class average: 71.7. Your grade: F. You failed the course.
