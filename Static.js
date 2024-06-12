The Intl.Collator object in JavaScript is used to compare and sort strings in a way that is s
ensitive to language differences. This can be particularly useful for sorting lists of names, words, or 
other strings in a manner that is appropriate for a given locale.

const collator = new Intl.Collator('en');
console.log(collator.compare('apple', 'banana')); // Output: -1 (means "apple" comes before "banana")
console.log(collator.compare('banana', 'apple')); // Output: 1 (means "banana" comes after "apple")
console.log(collator.compare('apple', 'apple'));  // Output: 0 (means the strings are equal)



const fruits = ['banana','apple','orange','grape']
const collator = new Intl.Collator('en')
//which format do you have
fruits.sort(collator.compare);
console.log(fruits)



const names = ['Zach','Asa','Ana','Alvirao']

const collatorEn = new Intl.Collator('en')
names.sort(collatorEn.compare)

// console.log(names)


const words = ['banana','Apple','orange','Grape'];
const collatorCI = new Intl.Collator('en',{sensitivity:'base'})
words.sort(collatorCI.compare);
console.log(words)


const collatorCS = new Intl.Collator('en', { sensitivity: 'case' });
words.sort(collatorCS.compare);
console.log(words); // Output: ["Apple", "Grape", "banana", "orange"]



const accentedWords = ['resume', 'résumé', 'resumé'];
const collatorBase = new Intl.Collator('en', { sensitivity: 'base' });
accentedWords.sort(collatorBase.compare);
console.log(accentedWords); // Output: ["resume", "résumé", "resumé"]


const collatorAccent = new Intl.Collator('en', { sensitivity: 'accent' });
accentedWords.sort(collatorAccent.compare);
console.log(accentedWords); // Output: ["resume", "resumé", "résumé"]
























