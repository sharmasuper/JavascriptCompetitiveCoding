
console.log("hello cookie")
//javascript cookie - cookies are small string directly store data in browser

//example - jaisai my name is mohit sharma ab yai brower mai store krnai kai liy cookies ka use kartha hu 
//if we will do in console alert(document.cookie )   ,all the cookie we will get 

// if I go to browser and then go to inspact and will do alert(document.cookie) , i will get all cookie

//Cookie are set by a web server using the set -Cookie http -header
//when we do request in web server ,web server send data in response and it fill cookie in browser by using set cookie header
//next Time, we wiil  do request of same server ,browser autometically will fill cookie in http header and  send it
// this way server will find it which is user
//example = supposed,i give a unique id each client , anyone user comes me . frist user i gives one id and second user i give two id.

//if we have a web server, help of the set-cookie i will give one of frist client then after that i will give two to the second client
//the help of second client

//next time , second client whom i have given 2 id who will send request to me. what will i do when he sends me the . 
// I will read the cookie Http-header .in cookie http-header,i will find the cookie which i set.
// this way , I will be able to identify  the unique client


// if we do alert(document.cookie) . it give ( key = value paire)
//delimited by semicolumn("") it means different cookie are set by semicolumn
// one or more cookies are have in one page
//if we set own cookie(name is mohit) in document page 
//i will write simply command - document.cookie = "name=mohitsharma677"(supposed) 

//example - 


console.log("frist command check cookie",document.cookie)
document.cookie = "name=mohitsharma7667"
document.cookie = "name2=sharmaji1245"
 
console.log(document.cookie)
document.cookie = "name=sharma"
console.log(document.cookie)

//when we do document.cookie ,cookies are add not remove/replace .it only update cookie


//second chapter - encode URI component

//supposed I have key of cookie and i have a value
//let i ask that key = prompt("enter your key") and I am asked value = prompt("enter your value")
// example = 
let key = prompt("enter your key")
let value = prompt("enter your value")
// document.cookie = `${key}=${value}`
// console.log("hello",document.cookie)

//but in prompt value if we write key = @3#; value = %$##;
//this time it forget key and value so we will use encodeURI component


document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)
//encodeURIComponent take all string but we need to decode it 
//how to we do decoede it
//ans = decodeURIComponent

decodeURIComponent("UYY%3B")
console.log(decodeURIComponent("UYY%3B"))  
//we will fill key who had written in encodeURIComponent

//document.cookie = "user=bhar;path=/a;expire=Tue,29 March2024 05:18:22GMt"
//note - the name=value pair,after encodeUriComponent,should not exeed 4kb
//Total no of Cookies per domain is limited to around 20+(exact number is browser dependant)
console.log("hello cookie")







