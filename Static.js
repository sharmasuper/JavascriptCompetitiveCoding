// a = [1,2,3,5].map(function(n){
//    return  n<=1?1 :arguments.callee(n-1)*n
// })
// console.log(a)

function foo(n) {
   const f = () => arguments[0]+n ; // foo's implicit arguments binding. arguments[0] is n
   return f();
 }
 
 foo(3); // 3 + 3 = 6
//  argunment - 
//  Arguments(2) [3, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
 
 add = foo(3); // 3 + 3 = 6
 console.log(add)
 


