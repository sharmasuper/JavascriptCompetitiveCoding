// [1, 2, 3, 4, 5].map(function (n) {
//    return n <= 1 ? 1 : arguments.callee(n - 1) * n;
//  });


e = [1,2,3,4,5]
a = e.map(function(n){
   return n<=1?1:arguments.callee(n-1)*n
})
console.log(a)