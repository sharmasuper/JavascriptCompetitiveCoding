// Proxy(target,Hndler) syntax is it
// The Proxy object in JavaScript enables you to create a proxy for another object, allowing you to
//  intercept and customize fundamental operations on that object. This provides a powerful mechanism for implementing 
//  custom behavior for various operations such as
//  property access, assignment, invocation, etc. Let's see an example:


// const target = {
//   message1 :"mohit",
//   message2 :"everyone"
// }
// const handler = {}

// const Proxy1 = new Proxy(target,handler)
// console.log(Proxy1.message1)
// console.log(Proxy1.message2)

let target = {
  name : "Alice",
  age : 30
}
let handler = {
  get : function(target,prop,received){
    console.log(`Getting property ${prop}`);
    return target[prop]; 
  },
  set : function (target,prop,value,received){
    console.log(`Setting property "${prop}" to ${value}`);
    target[prop] = value; 
    return true;
  }

}

let proxy = new Proxy(target, handler)
console.log(proxy.name)
proxy.age = 35;
console.log(target.age)



























