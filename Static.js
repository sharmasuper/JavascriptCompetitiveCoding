// The Intl.DisplayNames constructor method is used to create an instance of Intl.DisplayNames, 
// which provides localized names for various types of codes, such as languages, regions, scripts, 
// and currencies. Below are some examples demonstrating how to use the Intl.
// DisplayNames constructor for different types of display names.


const displayNamesLanguage = new Intl.DisplayNames(['en'],{type:'language'})

const languageNameEN = displayNamesLanguage.of('en')
const languageNameFR = displayNamesLanguage.of('fr')
const languageNameJP = displayNamesLanguage.of('ja')

console.log(languageNameEN)
console.log(languageNameFR)
console.log(languageNameJP)
// Regions
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
console.log(regionNames.of('BR'));  // Output: "Brazil"

// Languages
const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
console.log(languageNames.of('es'));  // Output: "Spanish"

// Currencies
const currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' });
console.log(currencyNames.of('GBP'));  // Output: "British Pound"

// Scripts
const scriptNames = new Intl.DisplayNames(['en'], { type: 'script' });
console.log(scriptNames.of('Hant'));  // Output: "Traditional Han"







