const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// Expected output: "func1"

console.log(object.func2.name); 
// Expected output: "func2"

function some(){
   return a+b
}
a = some.name
console.log(a)