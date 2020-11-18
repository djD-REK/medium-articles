// NOTE: instanceof won't work inside iframes
const myObject = {}
console.log(myObject instanceof Object) // true
console.log(myObject instanceof Array) // false

const myArray = []
console.log(myArray instanceof Object) // true
console.log(myArray instanceof Array) // true

const myNull = null
console.log(myNull instanceof Object) // false
console.log(myNull instanceof Array) // false

const myDate = new Date()
console.log(myDate instanceof Object) // true
console.log(myDate instanceof Array) // false
console.log(myDate instanceof Date) // true

const myRegExp = /howdy/
console.log(myRegExp instanceof Object) // true
console.log(myRegExp instanceof Array) // false
console.log(myRegExp instanceof RegExp) // true
