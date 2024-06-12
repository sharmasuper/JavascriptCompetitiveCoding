// Certainly! The Intl.ListFormat object in JavaScript is used to format lists of items into human-readable strings,
//  supporting various styles and types of lists based on locale. 
// Here's an example demonstrating how to use Intl.ListFormat

const listFormatter = new Intl.ListFormat('en',{style:'long',type:'conjunction'})

const item = ['apple','banana','orange']
const formattedList = listFormatter.format(item)
console.log(formattedList)
//apple, banana, and orange

//example 2nd 
const disjunctionformatter = new Intl.ListFormat('en',{style:'long',type:'disjunction'});
const disjunctionList = disjunctionformatter.format(item)
console.log(disjunctionList); 
// apple, banana, or orange

// example 3rd

const shortConjunctionFormatter = new Intl.ListFormat('en',{style:'short',type:'conjunction'})
const shortConjunctionList = shortConjunctionFormatter.format(item)
console.log(shortConjunctionList)
// apple, banana, & orange
//
//example 4th 


const narrowConjunctionFormatter = new Intl.ListFormat('en', { style: 'narrow', type: 'conjunction' });
const narrowConjunctionList = narrowConjunctionFormatter.format(item);

console.log(narrowConjunctionList);  // Output: apple, banana, orange



const germanFormatter = new Intl.ListFormat('de', { style: 'long', type: 'conjunction' });
const germanList = germanFormatter.format(item);

console.log(germanList);  // Output: "Äpfel, Bananen und Orangen"


const japaneseFormatter = new Intl.ListFormat('ja', { style: 'long', type: 'conjunction' });
const japaneseList = japaneseFormatter.format(item);

console.log(japaneseList);  // Output: "リンゴ、バナナ、オレンジ"





// const japaneseFormatter = new Intl.ListFormat('fr', { style: 'long', type: 'conjunction' });
// const japaneseList = japaneseFormatter.format(item);

// console.log(japaneseList);  //result in francicis



const parts = listFormatter.formatToParts(item);

console.log(parts);
// Output:
// [
//   { type: 'element', value: 'apples' },
//   { type: 'literal', value: ', ' },
//   { type: 'element', value: 'bananas' },
//   { type: 'literal', value: ', and ' },
//   { type: 'element', value: 'oranges' }
// ]



















