// 1. Flatten Deep Nested Arrays (do 2 poziomów)
// Description:
// Write a function that flattens an array which may contain nested arrays up to 2 levels deep into a single-level array.
// Example:
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]
function flattenTwoLevels(arr) {
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((item) => {
        if (Array.isArray(item)) {
          item.forEach((item2) => {
            result.push(item2);
          });
        } else {
          result.push(item);
        }
      });
    } else {
      result.push(element);
    }
  });
  return result;
}

// console.log(flattenTwoLevels([1, [2, [3, 4]], 5]));

// 2. Calculate Average Age from User Objects
// Description:
// Given an array of user objects with an 'age' property, calculate the average age.
// Example:
// Input: [{age: 20}, {age: 30}, {age: 40}]
// Output: 30
function calculateAverageAge(users) {
  let result = 0;
  users.forEach((user) => {
    result += user.age;
  });

  return result / users.length;
}

// console.log(calculateAverageAge([{age: 20}, {age: 30}, {age: 40}]))

// 3. Group By Multiple Properties
// Description:
// Write a function that groups an array of objects by two properties, returning a nested object.
// Example:
// Input: [{type: 'fruit', color: 'red'}, {type: 'fruit', color: 'green'}, {type: 'veg', color: 'green'}]
// Output:
// {
//   fruit: {
//     red: [{type: 'fruit', color: 'red'}],
//     green: [{type: 'fruit', color: 'green'}]
//   },
//   veg: {
//     green: [{type: 'veg', color: 'green'}]
//   }
// }
function groupByTwoProps(arr, prop1, prop2) {
  // deklaracja funkcji
}

// 4. Find Duplicate Objects by Key
// Description:
// Given an array of objects and a key, return an array of duplicate objects (those with the same value for that key).
// Example:
// Input: [{id:1}, {id:2}, {id:1}, {id:3}]
// Output: [{id:1}, {id:1}]
function findDuplicatesByKey(arr, key) {}

// 5. Count Word Frequencies Case Insensitive
// Description:
// Write a function that counts the frequency of each word in a string ignoring case and punctuation.
// Example:
// Input: "Hello, hello! world."
// Output: { hello: 2, world: 1 }
function countWordFrequency(text) {
  // deklaracja funkcji
}

// 6. Merge Objects by Key
// Description:
// Given an array of objects with the same keys, merge objects with the same key value by combining their properties.
// Example:
// Input: [{id: 1, val: 10}, {id: 1, val: 20}, {id: 2, val: 5}]
// Output: [{id: 1, val: 30}, {id: 2, val: 5}]
function mergeObjectsByKey(arr, key) {
  // const merged = {};

  // arr.forEach(item => {
  //   const id = item[key];
  //   if (!merged[id]) {
  //     merged[id] = { ...item }; // kopiujemy obiekt
  //   } else {
  //     merged[id].val += item.val; // łączymy wartości
  //   }
  // });

  // return Object.values(merged);
  const merged = {}
  arr.forEach(item => {
    id = item[key]
    console.log(id)
    if(!merged[id]) {
      merged[id] = {...item}
    } else {
      merged[id].val += item.val
    }
  })
  return merged
}


// console.log(
//   mergeObjectsByKey(
//     [
//       { id: 1, val: 10 },
//       { id: 1, val: 20 },
//       { id: 2, val: 5 },
//     ],
//     "id"
//   )
// );

// 7. Validate Array of Emails
// Description:
// Write a function that takes an array of emails and returns only valid emails (basic validation for presence of "@" and ".").
// Example:
// Input: ["test@example.com", "bademail@", "good@mail.com"]
// Output: ["test@example.com", "good@mail.com"]
function validateEmails(emails) {
  // deklaracja funkcji
}

// 8. Sliding Window Maximum
// Description:
// Given an array of numbers and a window size k, return an array of maximum values in each sliding window of size k.
// Example:
// Input: [1,3,-1,-3,5,3,6,7], k=3
// Output: [3,3,5,5,6,7]
function slidingWindowMaximum(nums, k) {
  result = []
  nums.forEach((num, index) => {
    max = 0
    if (index + k <= nums.length) {
      for (let i = index; i <= index + k; i++){
        if (nums[i] >= max) {
          max = nums[i]
        }
      }
      result.push(max)
    }
  })
  return result
}

// console.log(slidingWindowMaximum([1,3,-1,-3,5,3,6,7], 3))

// 9. Remove Elements by Condition
// Description:
// Write a function that removes elements from an array if they satisfy a given callback condition.
// Example:
// Input: [1, 2, 3, 4, 5], condition: (x) => x % 2 === 0
// Output: [1, 3, 5]
function removeByCondition(arr, condition) {
  // deklaracja funkcji
}

// 10. Transform Array to Object with Computed Keys
// Description:
// Write a function that transforms an array of strings into an object where keys are strings converted to uppercase and values are the string length.
// Example:
// Input: ['apple', 'bat']
// Output: { APPLE: 5, BAT: 3 }
function transformToObject(arr) {
  result = {}
  arr.forEach(item => {
    result[item] = item.length
  })
  return result
}

// console.log(transformToObject(['apple', 'bat']))


const funciton2 = () => {
  console.log(`${this.name}`)
}

const person = {name: "max"}

const maxfunc = funciton2.bind(person)

maxfunc()