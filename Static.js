// The Intl object in JavaScript is part of the ECMAScript Internationalization API, which is used for 
// language-sensitive string comparison, number formatting, date and time formatting, and more. It

// is designed to help developers handle internationalization (i18n) and localization (l10n) needs efficiently. 
// Here's a quick overview of some of the most commonly used Intl functionalities:

const date = new Date()
const formatter = new Intl.DateTimeFormat('en-US',{
    year: 'numeric',
    month: 'long',
    day: '2-digit'
})
console.log(formatter)
console.log(formatter.format(date)) // Output: "February 24, 2024"






