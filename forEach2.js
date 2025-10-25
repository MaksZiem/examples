// 1. Sum of Squares
// Description:
// Write a function that takes an array of numbers and returns the sum of their squares.
// Example:
// Input: [1, 2, 3]
// Output: 14  // (1*1 + 2*2 + 3*3 = 14)
function sumOfSquares(numbers) {
  
  let sum = 0
  numbers.forEach(element => {
    sum += element*element
  });
  return sum
}

// console.log(sumOfSquares([1, 2, 3]))

// 2. Extract Property Values
// Description:
// Given an array of objects and a property name, return an array containing the values of that property from each object.
// Example:
// Input: [{a: 1}, {a: 2}, {a: 3}], 'a'
// Output: [1, 2, 3]
function extractPropertyValues(arr, prop) {
  result = []
  arr.forEach(item => {

    result.push(item[prop])
  })
  return result
}

// console.log(extractPropertyValues([{a: 1}, {a: 2}, {a: 3}], 'a'))

// 3. Replace Negatives with Zero
// Description:
// Write a function that takes an array of numbers and returns a new array where all negative numbers are replaced with zero.
// Example:
// Input: [-1, 2, -3, 4]
// Output: [0, 2, 0, 4]
function replaceNegativesWithZero(arr) {
  result = []
  arr.forEach(item => {
    if(item <0) {
      result.push(0)
    } else {
      result.push(item)
    }
  })
  return result
}

// console.log(replaceNegativesWithZero([-1, 2, -3, 4]))

// 4. Count Strings Longer Than N
// Description:
// Write a function that counts how many strings in an array have a length greater than a given number n.
// Example:
// Input: ['apple', 'bat', 'cat'], 3
// Output: 1  // only 'apple' has length > 3
function countStringsLongerThan(arr, n) {
  
}

// 5. Append Exclamation
// Description:
// Write a function that takes an array of strings and returns a new array where each string has an exclamation mark appended at the end.
// Example:
// Input: ['Hi', 'Hello']
// Output: ['Hi!', 'Hello!']
function appendExclamation(arr) {
  result = []
  arr.forEach(item => {
    result.push(item + '!')
  })
  return result
}

// console.log(appendExclamation(['Hi', 'Hello']))

// 6. Sum Even Numbers Only
// Description:
// Write a function that sums only even numbers from an array of numbers.
// Example:
// Input: [1, 2, 3, 4]
// Output: 6  // 2 + 4 = 6
function sumEvenNumbers(arr) {
  
}

// 7. Find Longest Word
// Description:
// Write a function that takes an array of words and returns the longest word.
// Example:
// Input: ['cat', 'elephant', 'dog']
// Output: 'elephant'
function findLongestWord(words) {
  let result = ''
  let maxLength = 0
  words.forEach(item => {
    if(item.length >= maxLength) {
      maxLength = item.length
      result = item
    }
  })
  return result
}

// console.log(findLongestWord(['cat', 'elephant', 'dog']))

// 8. Convert Strings to Booleans
// Description:
// Write a function that takes an array of strings containing "true" or "false" and returns an array of booleans.
// Example:
// Input: ['true', 'false', 'true']
// Output: [true, false, true]
function stringsToBooleans(arr) {
  
}

// 9. Sum Nested Arrays
// Description:
// Given an array of arrays of numbers, write a function that returns an array of sums for each inner array.
// Example:
// Input: [[1, 2], [3, 4], [5]]
// Output: [3, 7, 5]
function sumNestedArrays(arr) {
  
}

// 10. Merge Arrays
// Description:
// Write a function that takes two arrays and returns a new array containing all elements of both arrays.
// Example:
// Input: [1, 2], [3, 4]
// Output: [1, 2, 3, 4]
function mergeArrays(arr1, arr2) {
  
}
