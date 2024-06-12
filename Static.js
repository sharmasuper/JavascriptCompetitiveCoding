// Certainly! The Intl.DateTimeFormat.prototype.resolvedOptions() method in JavaScript 
// is used to return a new object with properties reflecting the locale and date and time formatting options 
// computed during the initialization of the Intl.DateTimeFormat object.

// Create a new Intl.DateTimeFormat object
const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
  });
  
  // Use the resolvedOptions method to get the computed options
  const options = dateTimeFormat.resolvedOptions();
  
  console.log(options);
  




