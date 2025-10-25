// === REDUCE INTERVIEW TASKS FOR MID-LEVEL JS DEVELOPERS ===

// 1. Sum of Nested Array Values
// Description:
// Write a function that takes an array of numbers and nested arrays and returns the total sum.
// Example:
// Input: [1, [2, 3], 4, [5]]
// Output: 15
function sumNestedArray(arr) {
  const result = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      curr.forEach((item) => {
        acc += item;
      });
    } else {
      acc += curr;
    }
    return acc;
  }, 0);
  return result;
}

// function sumNestedArray(arr) {
//   return arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       // Dodaj sumę wewnętrznej tablicy
//       return acc + curr.reduce((subAcc, num) => subAcc + num, 0);
//     } else {
//       return acc + curr;
//     }
//   }, 0);
// }

// console.log(sumNestedArray([1, [2, 3], 4, [5]]))

// 2. Group by First Letter
// Description:
// Group words in an object where each key is the first letter and the value is an array of words starting with that letter.
// Example:
// Input: ['apple', 'banana', 'apricot', 'cherry']
// Output: { a: ['apple', 'apricot'], b: ['banana'], c: ['cherry'] }
function groupByFirstLetter(words) {
  const result = words.reduce((acc, curr) => {
    firstLetter = curr.charAt(0);
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(curr);
    return acc;
  }, {});
  return result;
}

// console.log(groupByFirstLetter(['apple', 'banana', 'apricot', 'cherry']))

// 3. Create Frequency Map
// Description:
// Write a function that returns a map of how many times each character appears in a string.
// Example:
// Input: 'mississippi'
// Output: { m: 1, i: 4, s: 4, p: 2 }
function charFrequency(str) {
  return str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

// console.log(charFrequency('mississippi'))

// 4. Find Most Frequent Element
// Description:
// Write a function that finds the most frequently occurring element in an array.
// Example:
// Input: ['a', 'b', 'a', 'c', 'a', 'b']
// Output: 'a'
function mostFrequentElement(arr) {
  const frequent = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(frequent).reduce((mostFreq, current) => {
    return frequent[current] > frequent[mostFreq] ? current : mostFreq;
  });
}

// console.log(mostFrequentElement(["a", "b", "a", "c", "a", "b"]));

// 5. Flatten Deep Array One Level
// Description:
// Flatten an array with nested arrays one level deep.
// Example:
// Input: [1, [2, 3], 4, [5, 6]]
// Output: [1, 2, 3, 4, 5, 6]
function flattenOneLevel(arr) {}

// 6. Object from Pairs
// Description:
// Convert an array of key-value pair arrays into a single object.
// Example:
// Input: [['name', 'Alice'], ['age', 30]]
// Output: { name: 'Alice', age: 30 }
function pairsToObject(pairs) {
  return pairs.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})
}

// console.log(pairsToObject([['name', 'Alice'], ['age', 30]]))

// 7. Combine Users by Role
// Description:
// Given an array of user objects with roles, group users by their role into an object.
// Example:
// Input: [{ name: 'Alice', role: 'admin' }, { name: 'Bob', role: 'user' }, { name: 'Eve', role: 'admin' }]
// Output: { admin: ['Alice', 'Eve'], user: ['Bob'] }
function groupUsersByRole(users) {
  return users.reduce((acc, curr) => {
    if(!acc[curr['role']]) {
      acc[curr['role']] = []
    }
    acc[curr['role']].push(curr['name'])
    return acc
  }, {})
}

console.log(groupUsersByRole([{ name: 'Alice', role: 'admin' }, { name: 'Bob', role: 'user' }, { name: 'Eve', role: 'admin' }]))
