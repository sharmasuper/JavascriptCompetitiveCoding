// The Intl.DisplayNames object is used to provide localized names for languages, 
// regions, scripts, and other categories. It allows you to obtain a 
// localized string for a given code, such as a language code or region code.


// Create a new Intl.DisplayNames object for the 'en' locale
const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });

// Use the of() method to get the display name for a specific region code
const regionNameUS = displayNames.of('US');  // United States
const regionNameFR = displayNames.of('FR');  // France
const regionNameJP = displayNames.of('JP');  // Japan 

console.log(regionNameUS);  // Output: "United States"
console.log(regionNameFR);  // Output: "France" 
console.log(regionNameJP);  // Output: "Japan" 



