const myObject = {}
console.log(typeof myObject) // "object"
console.log(Array.isArray(myObject)) // false

const myArray = []
console.log(typeof myArray) // "object"
console.log(Array.isArray(myArray)) // true

const myNull = null
console.log(typeof myNull) // "object"
console.log(Array.isArray(myNull)) // false

const myDate = new Date()
console.log(typeof myDate) // "object"
console.log(Array.isArray(myDate)) // false

const myRegExp = /howdy/
console.log(typeof myRegExp) // "object"
console.log(Array.isArray(myRegExp)) // false
