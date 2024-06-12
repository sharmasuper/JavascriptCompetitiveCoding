// The Intl.Collator.prototype.compare method in JavaScript is used to compare two 
// strings according to the locale and options specified when creating the Intl.Collator object. 
// This method returns a negative number if the first string comes before the second string, a positive number if the first string 
// comes after the second string, and zero if the two strings are considered equal.


// Create a Collator for the English locale
// const collator = new Intl.Collator('en');

// // Compare two strings
// console.log(collator.compare('apple', 'banana')); // Output: -1 (apple comes before banana)
// console.log(collator.compare('banana', 'apple')); // Output: 1 (banana comes after apple)
// console.log(collator.compare('apple', 'apple'));  // Output: 0 (strings are equal)

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// const collator = new Intl.Collator('en');
// fruits.sort(collator.compare);
// console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]

const names = ['Zach', 'Åsa', 'Ana', 'Álvaro'];
const collatorEN = new Intl.Collator('en');
names.sort(collatorEN.compare);
console.log(names); // Output: ["Ana", "Zach", "Åsa", "Álvaro"]

const collatorSV = new Intl.Collator('sv');
names.sort(collatorSV.compare);
console.log(names); // Output: ["Ana", "Åsa", "Álvaro", "Zach"]










