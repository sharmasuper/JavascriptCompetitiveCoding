// You are given an integer n. Initialize an array of length
//  n where each element is its index incremented by 1.Input: n = 5

// function add (n) {
//     let arr = Array(n)
//     for(let i=0;i<n;i++){
//          arr[i] = i+1
//     }
//     return arr
// }
// const include = add(5)
// console.log(include)


 //2nd answer
// Given an integer n, create an array of length n where each element is 0.Input: n = 4
//Output: [0, 0, 0, 0]


// function Zero(n) {
//      let arr = Array(n)
//       for (let i=0;i<n;i++){
//         arr[i] = 0
//       }
//       return arr
// }

// const add = Zero(4)
// console.log(add)

//3rd questions

// Create Array with Given Range:
// You are given two integers start and end. Create an array containing integers from start to end inclusive.Input: start = 3, end = 7
// Output: [3, 4, 5, 6, 7]

// function add(n){
//     let arr = Array(n)
//     let valu = 3

//     for(let i=0;i<5;i++){
//      arr[i] = valu
//       valu +=1
//     }
//     return arr
// }
// const include = add(5)
// console.log(include)

// Generate Fibonacci Sequence:
// Given an integer n, generate the first n elements of the Fibonacci sequence.Input: n = 6
// Output: [0, 1, 1, 2, 3, 5]
    
// function fibronSries(n) {
//     let fib = [0,1]
//     for (let i=2;i<n;i++){
//         fib[i] = fib[i-2] +fib[i-1]

//     }
//     return fib
// }

// const result =  fibronSries(6)
// console.log(result)

// question -  Initialize Array with Random Values:
// Given an integer n, initialize an array of length n where each element is a random integer between 1 and 1000.Input: n = 5
// Output: [432, 789, 123, 567, 890]

function Random(n) {
    let arr = Array(n)
    for(let i=0;i<n;i++){
      
        arr[i] = Math.floor(Math.random()*1000) +1  // Generate random number between 1 and 1000
     
    }
    return arr
}
const result = Random(6)
console.log(result)


