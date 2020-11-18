const isArray = (maybeArray) => maybeArray && maybeArray.constructor === Array

const myObject = {}
console.log(myObject && myObject.constructor) // function Object()
console.log(myObject && myObject.constructor.name) // Object
console.log(isArray(myObject)) // false

const myArray = []
console.log(myArray && myArray.constructor) // function Array()
console.log(myArray && myArray.constructor.name) // Array
console.log(isArray(myArray)) // true

const myNull = null
console.log(myNull && myNull.constructor) // null
console.log(myNull && myNull.constructor.name) // null
console.log(isArray(myNull)) // null

const myDate = new Date()
console.log(myDate && myDate.constructor) // function Date()
console.log(myDate && myDate.constructor.name) // Date
console.log(isArray(myDate)) // false

const myRegExp = /howdy/
console.log(myRegExp && myRegExp.constructor) // function RegExp()
console.log(myRegExp && myRegExp.constructor.name) // RegExp
console.log(isArray(myRegExp)) // false

const myUndefined = undefined
console.log(myUndefined && myUndefined.constructor) // undefined
console.log(myUndefined && myUndefined.constructor.name) // undefined
console.log(isArray(myUndefined)) // undefined
