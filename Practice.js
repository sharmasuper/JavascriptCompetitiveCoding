// array.filter(callbackFunction(element, index, array), thisArg)
// callbackFunction: यह एक फ़ंक्शन है जो हर एरे आइटम के लिए कॉल होती है।
// element: वर्तमान आइटम का मान।
// index (वैकल्पिक): वर्तमान आइटम का इंडेक्स।
// array (वैकल्पिक): वह एरे जिसमें फ़िल्टर किया जा रहा है।
// thisArg (वैकल्पिक): callbackFunction को कॉल करने के लिए this के मान को सेट करने के लिए उपयोग किया जाता है।
//return new Array after filter

const array = [1, 2, 3, 4, 5];
const add = array.filter((item)=>{
      return item>2
})
console.log(add)


const array2 = [1,"Two",3,"four",5]
      
  const add2 =     array2.filter((item)=>typeof item === "string")
      console.log(add2)

     const add3 = array2.filter((item)=>{
        if(typeof item ==="number"){
          return item
        }
     })
//return new Array after filter
     console.log(add3)



