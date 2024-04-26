// chapter - Array.prototype[@@unscopables]

// const Questions = " what is prototype"

function Person(name, age) {
   this.name = name
   this.age = age
  }

 Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name) 
  };
Person.prototype.Mohit = function () {
    console.log("Hello ,my age is 2nd "+ this.age)
}

var addObj = new Person("John",20)
addObj.Mohit()
addObj.sayHello()

