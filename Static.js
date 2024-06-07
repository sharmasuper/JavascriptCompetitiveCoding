try{
  function * foo(){
    yield 1;
    yield 2
    yield 3
    return "hello"// no effect these 
  }
  const value = foo().return(100)
  console.log(value)
}catch(error){
  console.log(error)
}