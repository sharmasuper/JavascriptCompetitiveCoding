// Certainly! The Intl.DisplayNames.prototype.resolvedOptions() method is used to return an object with properties reflecting
//  the locale and options computed during the initialization of the Intl.DisplayNames object.

// Create a new Intl.DisplayNames object for the 'en' locale with type 'region'
const displayNames = new Intl.DisplayNames(['en'], { type: 'region', fallback: 'code' });

// Use the resolvedOptions() method to get the computed options
const options = displayNames.resolvedOptions();

console.log(options);


