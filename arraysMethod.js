// 1. Find All Unique Elements
// Description:
// Given an array of numbers, return an array of elements that appear only once.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 3, 5]
// Hint: Use forEach and filter with indexOf/lastIndexOf
function findUniqueElements(arr) {
  // deklaracja funkcji
}

// 2. Create Tag Cloud Frequency Object
// Description:
// Given an array of strings (tags), return an object with frequency counts of each tag, sorted alphabetically by key.
// Example:
// Input: ['react', 'vue', 'react', 'angular']
// Output: { angular: 1, react: 2, vue: 1 }
// Hint: Use forEach and sort before final output
function tagFrequency(tags) {
  // deklaracja funkcji
}

// 3. Check If All Users Are Active
// Description:
// Given an array of user objects with an `isActive` boolean, return true if **all** users are active.
// Example:
// Input: [{isActive: true}, {isActive: true}]
// Output: true
// Hint: Use forEach and `every`
function areAllUsersActive(users) {
  // deklaracja funkcji
}

// 4. Get Emails from Verified Users
// Description:
// Return an array of emails from users who are verified.
// Example:
// Input: [{email: 'a@a.com', verified: true}, {email: 'b@b.com', verified: false}]
// Output: ['a@a.com']
// Hint: Use forEach and push based on `filter`-like logic
function getVerifiedEmails(users) {
  // deklaracja funkcji
}

// 5. Get Items That Contain a Substring
// Description:
// Given a list of strings and a search term, return only items that contain that substring (case insensitive).
// Example:
// Input: ['Hello', 'world', 'hero'], term: 'he'
// Output: ['Hello', 'hero']
// Hint: Use forEach and `toLowerCase` + `includes`
function filterBySubstring(arr, searchTerm) {
  // deklaracja funkcji
}

// 6. Calculate Total Order Value
// Description:
// Given an array of orders, each with quantity and price, return the total order value.
// Example:
// Input: [{ qty: 2, price: 10 }, { qty: 1, price: 20 }]
// Output: 40
// Hint: Use forEach and `+=` to simulate reduce
function calculateOrderTotal(orders) {
  // deklaracja funkcji
}

// 7. Get Common Elements From Two Arrays
// Description:
// Return an array of elements that exist in both arrays.
// Example:
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]
// Hint: Use forEach and `includes`
function getCommonElements(arr1, arr2) {
  // deklaracja funkcji
}

// 8. Normalize and Join Names
// Description:
// Given an array of names, return a single comma-separated string of names with first letter uppercase and rest lowercase.
// Example:
// Input: ['jOHN', 'DOE']
// Output: "John, Doe"
// Hint: Use forEach, `charAt`, `slice`, and `join`
function normalizeNames(names) {
  // deklaracja funkcji
}

// 9. Check If Any Admin Exists
// Description:
// Return true if **any** user has the role 'admin'.
// Example:
// Input: [{role: 'user'}, {role: 'admin'}]
// Output: true
// Hint: Use forEach and `some`
function hasAdmin(users) {
  // deklaracja funkcji
}

// 10. Group Words By First Letter
// Description:
// Return an object grouping words by their first lowercase letter.
// Example:
// Input: ['Apple', 'Ant', 'banana', 'berry']
// Output: { a: ['Apple', 'Ant'], b: ['banana', 'berry'] }
// Hint: Use forEach, `charAt(0).toLowerCase()` and object grouping
function groupByFirstLetter(words) {
  // deklaracja funkcji
}
