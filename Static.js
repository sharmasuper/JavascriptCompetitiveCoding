// try{

// const foo = function *(){
//   yield 'a';
//   yield 'b';
//   yield 'c';
// };
// let str = ''
// for(const val of foo()){
//  str = str+val
// }
// console.log(str)
// }catch(error){
//   console.log("add Error",error)
// }



try{
  
   const foo = function *(){
    yield 'a';
    yield 'b';
    yield 'c';
   }
   a = foo()
   console.log(a.entries())
  //  console.log(a.next())
  //  console.log(a.next())
  //  console.log(a.next())


  function* infinite() {
    let index = 0;
  
    while (true) {
      yield index++;
    }
  }
  add = infinite()
  // console.log(add.next())
  // console.log(add.next())
  // console.log(add.next())
  


}catch(error){
  console.log("show error",error) 
}





