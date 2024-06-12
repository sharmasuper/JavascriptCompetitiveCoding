// The Intl.getCanonicalLocales() method is used to return an array containing the canonical locale names. 
// This method can normalize locale identifiers to their canonical form


// Define an array of locale identifiers
// const locales = [
//     'EN-US',  // Uppercase variant
//     'en-us',  // Lowercase variant
//     'EN_us',  // Mixed case variant
//     'fr-fr',  // French (France)
//     'zh-Hans-CN',  // Chinese (Simplified, China)
//     'zh-hans-cn'   // Chinese (Simplified, China) in lowercase
//   ];
  
//   // Use the getCanonicalLocales method to get the canonical form of the locales
//   const canonicalLocales = Intl.getCanonicalLocales(locales);
  
//   console.log(canonicalLocales);
  

// Define an array with some invalid locale identifiers

const invalidLocales = [
    'invalid-locale',
    'en-XYZ',
    'abc-123'
  ];
  
  try {
    const canonicalInvalidLocales = Intl.getCanonicalLocales(invalidLocales);
    console.log(canonicalInvalidLocales);
  } catch (e) {
    console.error(e.message);
  }
  



