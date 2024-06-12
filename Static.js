const displayNames = new Intl.DisplayNames(['en'],{type:'region'});

const regionNamesUs = displayNames.of('US')
const regionNamesFR = displayNames.of('FR')
const regionNamesJP = displayNames.of('JP')

console.log(regionNamesUs);  // Output: "United States"
console.log(regionNamesFR);  // Output: "France"
console.log(regionNamesJP); 



// Create a new Intl.DisplayNames object for the 'en' locale
const displayNamesLanguages = new Intl.DisplayNames(['en'], { type: 'language' });

// Use the of() method to get the display name for a specific language code
const languageNameEN = displayNamesLanguages.of('en');  // English
const languageNameFR = displayNamesLanguages.of('fr');  // French
const languageNameJP = displayNamesLanguages.of('ja');  // Japanese

console.log(languageNameEN);  // Output: "English"
console.log(languageNameFR);  // Output: "French"
console.log(languageNameJP);  // Output: "Japanese"






// Create a new Intl.DisplayNames object for the 'en' locale
const displayNamesCurrencies = new Intl.DisplayNames(['en'], { type: 'currency' });

// Use the of() method to get the display name for a specific currency code
const currencyNameUSD = displayNamesCurrencies.of('USD');  // US Dollar
const currencyNameEUR = displayNamesCurrencies.of('EUR');  // Euro
const currencyNameJPY = displayNamesCurrencies.of('JPY');  // Japanese Yen

console.log(currencyNameUSD);  // Output: "US Dollar"
console.log(currencyNameEUR);  // Output: "Euro"
console.log(currencyNameJPY);  // Output: "Japanese Yen"










