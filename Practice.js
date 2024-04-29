//array.entries()
const array = ['Mohit',"sharma","Ram"] 
R = array.entries()  //yai array ko itrator mai convert kartha h

console.log(R)

for (e of R) {
    console.log(e)
}

//output - // (2) [0, 'Mohit']
// Practice.js:6 (2) [1, 'sharma']
// Practice.js:6 (2) [2, 'Ram']
 
for (e of array){
    console.log(e)  
}

// //output
// Mohit
// Practice.js:13 sharma
// Practice.js:13 Ram
