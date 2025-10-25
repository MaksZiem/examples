// 1. Sum of Numbers
// Description:
// Write a function that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 15

function sumArray(numbers) {
  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]))

// 2. Concatenate Strings
// Description:
// Write a function that concatenates all strings in an array into one string.
// Example:
// Input: ["Hello", " ", "world", "!"]
// Output: "Hello world!"

function concatenateStrings(strings) {
  const result = strings.reduce((acc, curr) => {
    return acc + curr;
  }, "");
  return result;
}

// console.log(concatenateStrings(["Hello", " ", "world", "!"]))

// 3. Count Occurrences
// Description:
// Write a function that counts how many times each element appears in the array.
// Example:
// Input: ["apple", "banana", "apple", "orange"]
// Output: { apple: 2, banana: 1, orange: 1 }

function countOccurrences(arr) {
  const result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return result;
}

// console.log(countOccurrences(["apple", "banana", "apple", "orange"]));

// 4. Find Maximum Value
// Description:
// Write a function that finds the maximum number in an array.
// Example:
// Input: [3, 9, 1, 7]
// Output: 9

function findMax(numbers) {
  // max = 0
  const result = numbers.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0);
  return result;
}

function findMax2(numbers) {
  if (numbers.length === 0) return undefined;
  return numbers.reduce((acc, curr) => (curr > acc ? curr : acc));
}

// console.log(findMax([3, 9, 1, 7]))

// 5. Group By Length
// Description:
// Write a function that groups words by their length.
// Example:
// Input: ["one", "two", "three", "four"]
// Output: { 3: ["one", "two"], 5: ["three"], 4: ["four"] }

function groupByLength(words) {
  const result = words.reduce((acc, curr) => {
    if (!acc[curr.length]) {
      acc[curr.length] = [];
    }
    acc[curr.length].push(curr);
    return acc;
  }, {});
  return result;
}

// console.log(groupByLength(["one", "two", "three", "four"]))

// 6. Flatten Array
// Description:
// Write a function that flattens an array one level deep.
// Example:
// Input: [1, [2, 3], 4, [5]]
// Output: [1, 2, 3, 4, 5]

const tablica = [[1, 2], [3, 4], [5]];
const spłaszczona = tablica.reduce((acc, curr) => acc.concat(curr), []);

console.log(spłaszczona)

function flatten(arr) {
  const result = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      curr.forEach((item) => {
        acc.push(item);
      });
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  return result
}

// console.log(flatten([1, [2, 3], 4, [5]]));

// 7. Build Lookup by Property
// Description:
// Write a function that builds a lookup object from an array of objects using a specified property as the key.
// Example:
// Input: [{id: 'a', val: 1}, {id: 'b', val: 2}], 'id'
// Output: { a: {id: 'a', val: 1}, b: {id: 'b', val: 2} }

function buildLookup(arr, key) {
  const result = arr.reduce((acc, curr) => {
    acc[curr['id']] = curr
    return acc
  }, {})
  return result
}

// console.log(buildLookup([{id: 'a', val: 1}, {id: 'b', val: 2}], 'id'))

const users = [
  { id: 1, name: 'Ala' },
  { id: 2, name: 'Ola' },
  { id: 3, name: 'Ela' }
];

const mapujPoId = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
