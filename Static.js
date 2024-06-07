
//step-1 Create an ArrayBuffer of a certain size(16 bytes in this example)

const buffer = new ArrayBuffer(16)
console.log(buffer.byteLength)
//step-2 Encode a string into the ArrayBuffer
const text = "Hello ! world"
const encoder = new TextEncoder();
const encodeBuffer = encoder.encode(text).buffer 
// console.log(buffer) 
console.log(encodeBuffer) // Output: ArrayBuffer containing the encoded string
console.log(new Uint8Array(encodeBuffer)) // Uint8Array view of the encoded buffer

//step-3 Decode the ArrayBuffer back to a string

const decoder = new TextDecoder(); 
const decodedText = decoder.decode(new Uint8Array(encodeBuffer))
console.log(decodedText)




