// 1. Capitalize First Letter of Each Word
// Description:
// Write a function that takes an array of words and returns a new array where each word has its first letter capitalized.
// Example:
// Input: ['apple', 'banana', 'cherry']
// Output: ['Apple', 'Banana', 'Cherry']
// Hint: Use forEach to iterate over the array and apply string manipulation to capitalize the first letter.

const words = ["apple", "banana", "cherry"];
function capitalizeWords(words) {
  let newWords = [];
  words.forEach((element) => {
    newWords.push(element.charAt(0).toUpperCase() + element.slice(1));
  });
  return newWords;
}

// forEach nie zwraca nowej tablicy i nie manipuluje stara tablica
// slice zwraca czesc stringa od x indeksu
// ​Metoda slice() w JavaScript pozwala na wyodrębnienie fragmentu tablicy lub łańcucha znaków i zwrócenie go jako nowy obiekt, bez modyfikowania oryginalnego.
// Jest to metoda niemodyfikująca, co oznacza, że nie zmienia tablicy, na której została wywołana.
// array.slice(start, end);

// 2. Calculate Total Price with Tax
// Description:
// Given an array of product prices, calculate the total price after adding a 10% tax to each product.
// Example:
// Input: [100, 200, 300]
// Output: 660
// Hint: Use forEach to add 10% tax to each price and accumulate the total.
const prices = [100, 200, 300];
function calculateTotalWithTax(prices) {
  let finalPrice = 0;
  prices.forEach((e) => {
    finalPrice += e * 1.1;
  });
  return finalPrice;
}

// 3. Filter Out Falsy Values
// Description:
// Write a function that removes all falsy values (false, null, 0, "", undefined, NaN) from an array.
// Example:
// Input: [0, "hello", false, 42, "", null, "world"]
// Output: ["hello", 42, "world"]
// Hint: Use forEach to iterate over the array and push truthy values to a new array.
const array = [0, "hello", false, 42, "", null, "world"];
function removeFalsyValues(array) {
  const truthyValues = [];
  array.forEach((e) => {
    if (e) {
      truthyValues.push(e);
    }
  });
  return truthyValues;
}

// 4. Count Occurrences of Each Element
// Description:
// Given an array, count how many times each unique element appears.
// Example:
// Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Output: { apple: 3, banana: 2, orange: 1 }
// Hint: Use forEach to iterate over the array and build an object with counts.
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
function countOccurrences(items) {
  const counts = {};
  items.forEach((item) => {
    counts[item] = counts[item] ? counts[item] + 1 : 1;
  });
  return counts;
}

// Tworzymy pusty obiekt counts: Będzie on przechowywał liczbę wystąpień każdego elementu.
// Iterujemy po tablicy items: Za pomocą pętli for przechodzimy przez każdy element tablicy.
// Aktualizujemy licznik: Dla każdego elementu sprawdzamy, czy już istnieje w obiekcie counts. Jeśli tak, zwiększamy jego wartość o 1. Jeśli nie, przypisujemy mu wartość 1.
// Zwracamy obiekt counts: Po zakończeniu iteracji zwracamy obiekt z wynikami.

// 5. Format User Information
// Description:
// Given an array of user objects with 'firstName' and 'lastName', return an array of full names.
// Example:
// Input: [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Smith' }]
// Output: ['John Doe', 'Jane Smith']
// Hint: Use forEach to concatenate 'firstName' and 'lastName' for each user.
const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];
function getFullNames(users) {
  const fullNames = [];
  users.forEach((user) => {
    fullNames.push(`${user.firstName} ${user.lastName}`);
  });
  return fullNames;
}

// 6. Capitalize Names
// Description:
// Write a function that takes an array of names and returns a new array with each name capitalized (first letter uppercase, rest lowercase).
// Example:
// Input: ['john', 'JANE', 'alice']
// Output: ['John', 'Jane', 'Alice']
// Hint: Use forEach to iterate over the array and apply string manipulation to capitalize the first letter and lowercase the rest.

const names = ["john", "JANE", "alice"];
function capitalizeNames(names) {
  const funnNames = [];
  names.forEach((name) => {
    funnNames.push(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  });
  console.log(funnNames);
}

// console.log(capitalizeNames(names))

// 7. Count Vowels
// Description:
// Write a function that takes a string and returns an object with the count of each vowel in the string.
// Example:
// Input: 'hello world'
// Output: { e: 1, o: 2 }
// Hint: Convert the string to lowercase, split it into characters, and use forEach to count vowels (a, e, i, o, u).

function countVowels(str) {
  const vowels = "aeiou";
  const result = {};
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) {
        result[char] = (result[char] || 0) + 1;
      }
    });
  return result;
}

// console.log(countVowels('helloworld'))
// zrobi tak ze albo wezmie to co jest pd result char czyli np a: 1 albo wpsize 0 jesli takiego nie ma i potem doda 1

// 8. Remove Duplicates
// Description:
// Write a function that takes an array and returns a new array with duplicates removed.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
// Hint: Use forEach to add elements to a new array only if they are not already present in it.

const input = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  const result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

// console.log(removeDuplicates(input))

// 9. Categorize Numbers
// Description:
// Write a function that takes an array of numbers and returns an object with two properties: 'even' and 'odd', each containing an array of corresponding numbers.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: { even: [2, 4], odd: [1, 3, 5] }
// Hint: Use forEach to check if each number is even or odd and push it to the appropriate array in the result object.

function categorizeNumbers(numbers) {
  const result = {
    even: [],
    odd: [],
  };

  numbers.forEach((item) => {
    if (item % 2 == 0) {
      result.even.push(item);
    } else {
      result.odd.push(item);
    }
  });
  return result;
}

// console.log(categorizeNumbers([1, 2, 3, 4, 5]))

// 10. Group Words by Length
// Description:
// Write a function that takes an array of words and returns an object where keys are word lengths and values are arrays of words with that length.
// Example:
// Input: ['apple', 'bat', 'car', 'dog', 'elephant']
// Output: { '3': ['bat', 'car', 'dog'], '5':

function groupWordsByLength(words) {
  const result = words.reduce((acc, curr) => {
    if(!acc[curr.length]) {
      acc[curr.length] = []
    }
    acc[curr.length].push(curr)
    return acc 
  }, {})
  return result
}



function groupWordsByLength2(words) {
  result = {};
  words.forEach((word) => {
    const len = word.length;
    if (!result[len]) {
      result[len] = [];
    }
    result[len].push(word);
  });
  return result;
}

console.log(groupWordsByLength(["apple", "bat", "car", "dog", "elephant"]));

// jak nie ma obiektu z kluczem zawierajacym dlugosc slowa to zostawia pusta tablice a jak ma to dodaje ale najpierw go tworzy

// 11. Flatten One-Level Nested Arrays
// Description:
// Write a function that takes an array which may contain nested arrays (one level deep) and returns a new flat array with all values.
// Example:
// Input: [[1, 2], 3, [4, 5], 6]
// Output: [1, 2, 3, 4, 5, 6]
// Hint: Use forEach to check if an element is an array and then iterate its elements.

function flattenArray(arr) {
  const result = []
  arr.forEach(item => {
    if(Array.isArray(item)) {
      item.forEach(item => {
        result.push(item)
      })
    }
    else {
      result.push(item)
    }
  })
  return result
}

// console.log(flattenArray([[1, 2], 3, [4, 5], 6]))

// 12. Array to Lookup Map
// Description:
// Write a function that takes an array of objects and a key name, returning an object mapping each key value to its corresponding object.
// Example:
// Input: [{ id: 'a', val: 1 }, { id: 'b', val: 2 }], 'id'
// Output: { a: { id: 'a', val: 1 }, b: { id: 'b', val: 2 } }
// Hint: Use forEach to build the map by assigning map[obj[keyName]] = obj.

function arrayToLookup(arr, keyName) {
}

// 13. Sliding Window Sum
// Description:
// Write a function that takes an array of numbers and a window size k, returning an array of sums of each subarray of length k.
// Example:
// Input: [1, 2, 3, 4, 5], 3
// Output: [6, 9, 12]
// Hint: Use forEach to iterate starting indices and another forEach or loop to sum the window.

function slidingWindowSum(nums, k) {
  result = []
  nums.forEach((num, index) => {
    if(index <= nums.length - k) {
      let sum = 0
      for (let j = index; j <= index + k - 1; j++) {
        sum += nums[j]
      }
      result.push(sum)
    }
  })
  return result
}

// console.log(slidingWindowSum([1, 2, 3, 4, 5], 3))

// 14. Group Objects by Property
// Description:
// Write a function that takes an array of objects and a property name, returning an object grouping objects by the value of that property.
// Example:
// Input: [{ age: 20 }, { age: 30 }, { age: 20 }], 'age'
// Output: { '20': [{ age: 20 }, { age: 20 }], '30': [{ age: 30 }] }
// Hint: Use forEach to inspect obj[prop] and push into the appropriate array in the result.

function groupByProperty(arr, prop) {
  result = {}
  arr.forEach(item => {
    const key = item[prop] // np 20
    if (!result[key]) {
      // najpierw robie tablice a potem ja zapelniam
      result[key] = []
    }
    result[key].push(item)
  })
  return result
}

console.log(groupByProperty([{ age: 20 }, { age: 30 }, { age: 20 }], 'age'))

// 15. Map Elements to Indices
// Description:
// Write a function that takes an array and returns an object mapping each unique element to an array of its indices in the original array.
// Example:
// Input: ['a', 'b', 'a', 'c']
// Output: { a: [0, 2], b: [1], c: [3] }
// Hint: Use forEach with index parameter to collect positions in an array for each element.

function mapElementsToIndices(arr) {
  result = {}
  arr.forEach((item, index) => {
    if(!result[item]) {
      result[item] = []
    }
    result[item].push(index)
  })
  return result
}

// console.log(mapElementsToIndices(['a', 'b', 'a', 'c']))
