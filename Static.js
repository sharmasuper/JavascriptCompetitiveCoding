// Sure! The Intl.DateTimeFormat.supportedLocalesOf() method is used to check which 
// of the given locales are supported by the Intl.DateTimeFormat object.

// Define an array of locales
// Define an array of locales
const locales1 = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options1 = { localeMatcher: 'lookup' };

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales1, options1));



// Define an array of locales
const locales = ['en-US', 'fr-FR', 'de-DE', 'zh-CN', 'xyz-ABC'];

// Check which of these locales are supported
const supportedLocales = Intl.DateTimeFormat.supportedLocalesOf(locales);

console.log(supportedLocales);

