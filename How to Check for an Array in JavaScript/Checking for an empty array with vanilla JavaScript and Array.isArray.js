const emptyArray = []
const fullArray = [777]
const notAnArray = 777

if (Array.isArray(emptyArray)) {
  if (emptyArray.length > 0) {
    console.log("Non-empty array")
  }
}

if (Array.isArray(fullArray)) {
  if (fullArray.length > 0) {
    console.log("Non-empty array")
  }
}
// Output: "Non-empty array

if (Array.isArray(notAnArray)) {
  if (notAnArray.length > 0) {
    console.log("Non-empty array")
  }
}

// Using the logical AND operator && works the same as the last statement
// in that we will never try to access .length unless we get a value of
// true from Array.isArray
console.log(Array.isArray(emptyArray) && emptyArray.length > 0) // false
console.log(Array.isArray(fullArray) && fullArray.length > 0) // true
console.log(Array.isArray(notAnArray) && notAnArray.length > 0) // false

// You can create a simple function to find non-empty arrays:
const isNonEmptyArray = (maybeArray) =>
  Array.isArray(maybeArray) && maybeArray.length > 0
