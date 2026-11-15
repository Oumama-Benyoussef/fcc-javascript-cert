function findElement(arr, fct) {
  // Iterate through array and return first element that passes the test
  for (let x of arr) {
    if (fct(x)) {
      return x; //  stops at first match
    }
  }
  return undefined; // No match found
}

// Test cases
console.log(findElement([1, 3, 5, 8], num => num % 2 === 0)); // 8
console.log(findElement([1, 3, 5], num => num % 2 === 0));    // undefined
