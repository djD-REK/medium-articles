// Set up a number array with duplicate values
const myNumberArray = [37, 37, 370, 3700, 3700, 37]

// Using Set with different approaches
// 1) Set using for...of loop
const myNumberSetForOf = new Set()
for (const myNumber of myNumberArray) {
  myNumberSetForOf.add(myNumber)
}
// 2) Set using .forEach()
const myNumberSetForEach = new Set()
myNumberArray.forEach((aNumber) => {
  myNumberSetForEach.add(aNumber)
})
// 3) Set using the Set() constructor with an iterable object
// Note that arrays are iterable objects, but JavaScript objects are not
const myNumberSetConstructor = new Set(myNumberArray)

// Convert any Set() back into an array using Array.from()
console.log(Array.from(myNumberSetConstructor)) // [37,370,3700]
// One-liner:
console.log(Array.from(new Set([37, 37, 370, 3700, 3700, 37]))) // [37,370,3700]

// Set's behavior is the same for all primitive values
// including strings, booleans, NaN, undefined, and null
const myStringArray = ["🙌", "🗽", "😜", "🔥", "💯", "💯", "🔥", "🗽", "😜"]
console.log(Array.from(new Set(myStringArray))) // ["🙌","🗽","😜","🔥","💯"]
