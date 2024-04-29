//javascrit array at method 

// const array2 = [1,2,3,4]
// const array1 = ["MOhit","Ram","Shyam","Govind"]
 


// const combine = array1.concat(array2)
// console.log(combine)


const nums = [0,1,2,3,4,5,6,7,8,9]
nums.copyWithin(0,3,4)
console.log(nums)
nums.copyWithin(0)
console.log(nums)
nums.copyWithin(1)
console.log(nums) output- [0, 0, 1, 2, 3, 4, 5, 6, 7, 8]

nums.copyWithin(2,3,5)
console.log(nums) output [0, 1, 3, 4, 4, 5, 6, 7, 8, 9]

//copywithin(startIndex,startcopyIndex,endcopyIndex)
//startIndex = startIndex jaha sai aap copy index ko start karna chahtai ho

//startCopyindex = jaha sai aap index ko copy karna chahtai ho

//endcopyIndex = jaha sai aap copy karnai valai index ko close karna chahtai ho


console.log("hello")

