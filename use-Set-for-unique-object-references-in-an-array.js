// Different JavaScript objects have different
// object references, even with the same values:
const someArray = [1]
const otherArray = [1]

// Different references even though both are [1]
console.log(`Does someArray === someArray?`)
console.log(`${someArray === someArray}`)

// Output: true because of same object reference
console.log(`Does someArray === otherArray?`)
console.log(`${someArray === otherArray}`)
// Output: false because of different references

// We can use Set to find the unique references
const arrays = [someArray, someArray, otherArray]
const uniqueArrays = Array.from(new Set(arrays))
console.log(`${uniqueArrays.length} unique refs`)
// Output: 2 unique refs, someArray & otherArray

// Example using objects instead of arrays
const myObj = { hello: "world 🌎" }
const moonObj = { hello: "moon 🌕" }
const objArrays = [myObj, myObj, moonObj, moonObj]
const uniqueObjArr = Array.from(new Set(arrays))
console.log(`${uniqueObjArr.length} unique refs`)
// Output: 2 unique refs, myObj & moonObj
