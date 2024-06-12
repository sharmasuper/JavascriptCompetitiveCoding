// The Intl.Collator.supportedLocalesOf() method in JavaScript is used to check which of the 
// specified locales are supported by the Intl.Collator object. This can be useful when you want to see if certain locales can 
// be used for string comparison and sorting operations in a specific environment.

const locals = ['en-US', 'fr-FR', 'es-ES', 'de-DE', 'ja-JP'];
const supportedLocales = Intl.Collator.supportedLocalesOf(locals)
console.log(supportedLocales)
const list = ["mohit","mriyanka","mijaya"]
list.sort(new Intl.Collator('es-Fs').compare)
console.log(list)





