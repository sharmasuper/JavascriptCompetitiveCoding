//Array.every()
// const arr = [2,1,2,3,4,5,6]
const arr = [2,,4,6,8]
const er = arr.every((e)=>{
    if(e%2===0){
        return e
    }
})

console.log(er)

//every method sabhi mai check karha h ki or return true or false kartha h
const arr1 = [2,4,6,8]
const ev = arr1.every((item)=>{
      return item>1
})
 console.log(ev)

const person = [
    {name:"Mohit"},{name:"Ram"},{name:"Gopal"},{name:"ms"}
]

const check = person.every((item)=>item.name!==undefined)
 console.log(check)

