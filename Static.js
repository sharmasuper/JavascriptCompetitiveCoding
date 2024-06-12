// The Intl.Collator.prototype.resolvedOptions() method returns a new object 
// with properties reflecting the locale and collation options computed during the initialization 
// of the Collator object. This can be useful to understand which options were used, especially when 
// defaults are involved or when the options were influenced by the environment.

// Here is an example that demonstrates how to use the resolvedOptions method with Intl.Collator:



// const date = new Date();
// const formatter = new Intl.DateTimeFormat('hi-IN', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// });
// console.log(formatter.format(date)); // Output: "12 जून 2024" (format may vary)

// Example: Using Intl.Collator and resolvedOptions

// Create a Collator object for Hindi (India) locale with specific options
const collator = new Intl.Collator('hi-IN', {
    sensitivity: 'base',
    ignorePunctuation: true,
  });
  
  // Example strings to compare
  const string1 = 'अनार';
  const string2 = 'आम';
  
  // Compare the strings
  console.log(`Comparison result: ${collator.compare(string1, string2)}`); // Output: -1
  
  // Retrieve and log the resolved options
  const options = collator.resolvedOptions();
  console.log('Resolved options:', options);
  
  /*
  Output:
  Resolved options: {
    locale: "hi-IN",
    usage: "sort",
    sensitivity: "base",
    ignorePunctuation: true,
    collation: "default",
    numeric: false,
    caseFirst: "false"
  }
  */
  



