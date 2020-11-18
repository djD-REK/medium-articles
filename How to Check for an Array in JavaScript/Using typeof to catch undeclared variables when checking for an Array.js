// Declared array example using typeof:
const declaredArray = []
let isThatAnArray = false
console.log(typeof declaredArray) // object
if (typeof declaredArray === "object") {
  // Alternatively, typeof declaredArray !== "undefined"
  // would screen out undefined & undeclared variables
  isThatAnArray = Array.isArray(declaredArray)
}
console.log(isThatAnArray) // true

// Undefined variable example using typeof:
let undefinedVariable
isThatAnArray = false
console.log(typeof undefinedVariable) // undefined
if (typeof undefinedVariable === "object") {
  isThatAnArray = Array.isArray(undefinedVariable)
}
console.log(isThatAnArray) // false

// Undeclared variable example using typeof:
isThatAnArray = false
console.log(typeof undeclaredVariable) // undefined
if (typeof undeclaredVariable === "object") {
  isThatAnArray = Array.isArray(undeclaredVariable)
}
console.log(isThatAnArray) // false

// Undeclared variable example using try-catch:
isThatAnArray = false
try {
  isThatAnArray = Array.isArray(undeclaredVariable)
} catch (e) {
  console.log(e)
  // ReferenceError: "undeclaredVariable is not defined"
}
console.log(isThatAnArray) // false
