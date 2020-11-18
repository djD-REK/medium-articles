// Make a new Set with new Set():
const myUniqueColors = new Set()
const myObject1 = { color: "🔴" }
const myObject2 = { color: "🔵" }
const myObject3 = { color: "🟢" }
const myObject4 = { color: "🔵" }
const myObject5 = { color: "🟢" }

// Add a value to the Set with .add():
myUniqueColors.add(myObject1.color)
myUniqueColors.add(myObject2.color)
myUniqueColors.add(myObject3.color)
myUniqueColors.add(myObject4.color)
myUniqueColors.add(myObject5.color)

// You can work with the Set directly:
console.log(myUniqueColors)
// Output: Set(3) ["🔴", "🔵", "🟢"]

// Or convert the Set into an array:
console.log(Array.from(myUniqueColors))
// Output: Array(3) ["🔴", "🔵", "🟢"]

// The spread operator works as well:
console.log([...myUniqueColors])
// Output: Array(3) ["🔴", "🔵", "🟢"]
