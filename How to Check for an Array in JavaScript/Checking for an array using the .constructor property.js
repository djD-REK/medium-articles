const isArray = (maybe) => maybe.constructor.name === "Array"

const myObject = {}
console.log(myObject.constructor) // function Object()
console.log(myObject.constructor.name) // Object
console.log(isArray(myObject)) // false

const myArray = []
console.log(myArray.constructor) // function Array()
console.log(myArray.constructor.name) // Array
console.log(isArray(myArray)) // true

const myNull = null
try {
  console.log(myNull.constructor)
} catch (e) {
  console.log(e)
} // TypeError: "myNull is null"
try {
  console.log(null.constructor)
} catch (e) {
  console.log(e)
} // TypeError: "null has no properties"
try {
  isArray(myNull)
} catch (e) {
  console.log(e)
} // TypeError: "maybeArray is null"

const myDate = new Date()
console.log(myDate.constructor) // function Date()
console.log(myDate.constructor.name) // Date
console.log(isArray(myDate)) // false

const myRegExp = /howdy/
console.log(myRegExp.constructor) // function RegExp()
console.log(myRegExp.constructor.name) // RegExp
console.log(isArray(myRegExp)) // false

const myUndefined = undefined
try {
  console.log(myUndefined.constructor)
} catch (e) {
  console.log(e)
} // TypeError: "myUndefined is undefined"
try {
  console.log(undefined.constructor)
} catch (e) {
  console.log(e)
} // TypeError: "undefined has no properties"
try {
  isArray(myUndefined)
} catch (e) {
  console.log(e)
} // TypeError: "maybeArray is undefined"
