// The Intl.DateTimeFormat.prototype.formatRange() method in JavaScript is used to format a range of dates 
// in a locale-sensitive manner. 
// This method is useful for displaying date ranges in a way that is appropriate for the user's locale.



const startDate = new Date('2024-06-01T00:00:00Z')
const endDate = new Date('2025-08-17T23:59:59Z');

const formatter = new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric'
})

const formattedRange = formatter.formatRange(startDate,endDate)
console.log(formattedRange);

// const fomattedRange = formatter.format(startDate)
// console.log(fomattedRange)


