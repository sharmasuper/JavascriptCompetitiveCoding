const startDate = new Date('2024-06-01T00:00:00Z');
const endDate = new Date('2024-06-12T23:59:59Z');
const formatter = new Intl.DateTimeFormat('ja-JP',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit'
})

const formattedRange = formatter.formatRange(startDate,endDate)
console.log(formattedRange)