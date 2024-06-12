// The Intl.Collator constructor in JavaScript is used to create a new Collator object that enables 
// language-sensitive string comparison. You can specify various options to tailor the string comparison behavior according to your needs. 
// Here's a detailed example of how to use the Intl.Collator constructor:


// const collator = new Intl.Collator('en');

// // Compare two strings
// console.log(collator.compare('apple', 'banana')); // Output: -1 (apple comes before banana)
// console.log(collator.compare('banana', 'apple')); // Output: 1 (banana comes after apple)
// console.log(collator.compare('apple', 'apple'));  // Output: 0 (strings are equal)



// const fruits = ['banana','apple','orange','grape']
// const collator = new Intl.Collator('en')
// console.log(collator)
// fruits.sort(collator.compare);
// console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]


// const names = ['Zach', 'Åsa', 'Ana', 'Álvaro'];

// // Collator for English locale
// const collatorEN = new Intl.Collator('en');
// names.sort(collatorEN.compare);
// console.log(names); // Output: ["Ana", "Zach", "Åsa", "Álvaro"]

// // Collator for Swedish locale
// const collatorSV = new Intl.Collator('sv');
// names.sort(collatorSV.compare);
// console.log(names); // Output: ["Ana", "Åsa", "Álvaro", "Zach"]

// const words = ['banana', 'Apple', 'orange', 'Grape'];
// const collatorBase = new Intl.Collator('en', { sensitivity: 'base' });
// words.sort(collatorBase.compare);
// console.log(words); // Output: ["Apple", "banana", "Grape", "orange"]


// const collatorCase = new Intl.Collator('en', { sensitivity: 'case' });
// words.sort(collatorCase.compare);
// console.log(words); // Output: ["Apple", "Grape", "banana", "orange"]


// const accentedWords = ['resume', 'résumé', 'resumé'];
// const collatorAccent = new Intl.Collator('en', { sensitivity: 'accent' });
// accentedWords.sort(collatorAccent.compare);
// console.log(accentedWords); // Output: ["resume", "resumé", "résumé"]


// const phrases = ['Hello, world!', 'Hello world', 'Hello!'];
// const collatorIgnorePunctuation = new Intl.Collator('en', { ignorePunctuation: true });
// phrases.sort(collatorIgnorePunctuation.compare);
// console.log(phrases); // Output: ["Hello world", "Hello, world!", "Hello!"]





const items = ['résumé', 'resume', 'resumé'];
const collatorCombined = new Intl.Collator('en', {
  sensitivity: 'base',
  ignorePunctuation: true,
});
items.sort(collatorCombined.compare);
console.log(items); // Output: ["resume", "résumé", "resumé"]

























