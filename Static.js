const obj = {
   num: 100,
 };
 
 // Setting "num" on globalThis to show how it is NOT used.
 globalThis.num = 42;
 
 // A simple traditional function to operate on "this"
 const add = function (a, b, c) {
   return this.num + a + b + c;
 };
 
 console.log(add.call(obj, 1, 2, 3)); // 106
 console.log(add.apply(obj, [1, 2, 3])); // 106
 const boundAdd = add.bind(obj,1,2,3);
 const boundAdd1 = add.bind(obj);
 console.log(boundAdd()); // 106
 console.log(boundAdd1(1,2,3))
 

