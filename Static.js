// The parseFloat() function in JavaScript is used to parse a string and return a floating-point number. 
// This function parses the string until it encounters a character that is not part of the floating-point 
// notation, and then it returns the number parsed up to that point.

// parseFloat("string")
// Basic usage 

console.log(parseFloat("3.14"));       // Output: 3.14
console.log(parseFloat("10.00"));      // Output: 10

// With leading and trailing spaces
console.log(parseFloat("  3.14  "));   // Output: 3.14

// With extra text after the number
console.log(parseFloat("3.14abc"));    // Output: 3.14

// Starting with non-numeric text
console.log(parseFloat("abc3.14"));    // Output: NaN

// Integers
console.log(parseFloat("42"));         // Output: 42

// Exponential notation
console.log(parseFloat("1.23e4"));     // Output: 12300
console.log("add",parseFloat(100,8))

// Negative numbers
console.log(parseFloat("-123.45"));    // Output: -123.45

// Strings that cannot be converted to numbers
console.log(parseFloat("hello"));      // Output: NaN








