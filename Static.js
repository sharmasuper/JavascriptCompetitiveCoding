// The escape() method in JavaScript is an older function that encodes a string so that it can be safely 
// included in a URL. It encodes special characters, except *, +, -, . and @, using the percent-encoding scheme. 
// However, it has been deprecated and replaced by encodeURI() and encodeURIComponent(), 
// which are more robust and versatile for handling URL components.


e = escape("hello mohit sharma")
console.log(e)
a = decodeURI(e)
console.log(a)