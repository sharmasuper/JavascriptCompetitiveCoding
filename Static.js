// Certainly! The Intl.DisplayNames.prototype.of() method is used to return a localized string for a 
// given code, such as a region code, language code, script code, or currency code. 
// Below are some examples demonstrating how to use the of() method for different types of codes.

// const regionDisplayNames = new Intl.DisplayNames(['en'],{type:'region'})

// console.log(regionDisplayNames.of('US'))
// console.log(regionDisplayNames.of('FR'))
// console.log(regionDisplayNames.of('JP'))


// Create a new Intl.DisplayNames object for the 'en' locale with type 'language'
const languageDisplayNames = new Intl.DisplayNames(['en'], { type: 'language' });

// Use the of() method to get the display name for specific language codes
console.log(languageDisplayNames.of('en'));  // Output: "English"
console.log(languageDisplayNames.of('fr'));  // Output: "French"
console.log(languageDisplayNames.of('ja'));  // Output: "Japanese"




// Create a new Intl.DisplayNames object for the 'en' locale with type 'script'
const scriptDisplayNames = new Intl.DisplayNames(['en'], { type: 'script' });

// Use the of() method to get the display name for specific script codes
console.log(scriptDisplayNames.of('Latn'));  // Output: "Latin"
console.log(scriptDisplayNames.of('Cyrl'));  // Output: "Cyrillic"
console.log(scriptDisplayNames.of('Arab'));  // Output: "Arabic"











