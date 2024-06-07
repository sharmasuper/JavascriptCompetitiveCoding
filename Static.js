function containEncodedComponent(x){
  return decodeURI(x) !== decodeURIComponent(x)
}

// console.log(
// containEncodedComponent("https://www.google.com/search?q=%E0%A4%B8%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0"))

e = decodeURIComponent("%3Fx%3Dtest")
f = decodeURI('%3Fx%3Dtest')
console.log(f)
console.log(e)



