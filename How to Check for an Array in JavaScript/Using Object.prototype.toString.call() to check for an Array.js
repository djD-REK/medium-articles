const isArray = (maybeArray) =>
  Object.prototype.toString.call(maybeArray).slice(8, -1) === "Array"

const myObject = {}
console.log(Object.prototype.toString.call(myObject)) // [object Object]
console.log(Object.prototype.toString.call(myObject).slice(8, -1)) // Object
console.log(isArray(myObject)) // false

const myArray = []
console.log(Object.prototype.toString.call(myArray)) // [object Array]
console.log(Object.prototype.toString.call(myArray).slice(8, -1)) // Array
console.log(isArray(myArray)) // true

const myNull = null
console.log(Object.prototype.toString.call(myNull)) // [object Null]
console.log(Object.prototype.toString.call(myNull).slice(8, -1)) // Null
console.log(isArray(myNull)) // false

const myDate = new Date()
console.log(Object.prototype.toString.call(myDate)) // [object Date]
console.log(Object.prototype.toString.call(myDate).slice(8, -1)) // Date
console.log(isArray(myDate)) // false

const myRegExp = /howdy/
console.log(Object.prototype.toString.call(myRegExp)) // [object RegExp]
console.log(Object.prototype.toString.call(myRegExp).slice(8, -1)) // RegExp
console.log(isArray(myRegExp)) // false
