function frankenSplice(arr1, arr2, index) {
  const result = [];
  
  // Copy elements from arr2 up to the insertion point
  for (let i = 0; i < index; i++) {
    result.push(arr2[i]);
  }
  
  // Insert all elements from arr1
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  
  // Copy remaining elements from arr2 after the insertion point
  for (let i = index; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  
  return result;
}

// Tests
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
