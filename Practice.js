
//cookies
console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223445502"  //cookie replace nahi hotai yai add ho jatai h
document.cookie = "name=MOhit1122334400"    //esai hum issai update kar sktai h
console.log(document.cookie)

///ab tiwitter.com per jao or vaha per cookies ko update krao
//or console per likhna h
//document.cookie   
//command - console.log(document.cookie)  issai uskai sarai cookie mil jaygai
// new topic  
//incode URI component
let key  = prompt("enter your key")
let value  = prompt("enter your value")

document.cookie = `${key} = ${value}`  //yai ;#4: esai key value pair ko set nahi kar paya
console.log(document.cookie)           //isko solve karnai kai liy encodeURIComponent ka use kartai h it takes all string

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)


