try{

   function * gen(){
    while(true){
      try{
        yield 42;
        yield 34;
      }catch(error){
        console.log("add2 Error",error)
      }
    }
   }
   const g = gen() 
   console.log(g.next()) 
   console.log(g.next()) 
   e =  g.throw(new Error("Something went wrong !!"))
   console.log(e)
  
  

}catch(error){
  console.log("add error",error)
}
