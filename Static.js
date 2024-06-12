// The Intl.DateTimeFormat.prototype.formatToParts() method in JavaScript is used to 
// format a date into an array of objects, each representing a part of the formatted date string. This method provides a detailed breakdown of the formatted date, 
// allowing for granular control over the formatting and rendering of dates.

const date = new Date('2024-06-12T13:15:30Z');
const formatter = new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric',
    weekday:'long',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZoneName:'short'
})

const formattedParts = formatter.formatToParts(date)
console.log(formattedParts)

// const formattedParts = formatter.format(date)
// console.log(formattedParts)










