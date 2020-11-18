const myObjects = [
  { color: "💛" },
  { color: "💛" },
  { color: "💜" },
  { color: "🧡" },
  { color: "💜" },
  { color: "🧡" },
]

// We could use a for...of loop:
const uniqueColors = new Set()
for (const object of myObjects) {
  uniqueColors.add(object.color)
}
console.log(uniqueColors)
// Output: Set(3) [ "💛", "💜", "🧡" ]

// Better yet, we can use .map():
const justColors = myObjects.map((o) => o.color)
// That extracts just the colors to a  new array.

// Then, use Set to remove the duplicate colors:
console.log(new Set(justColors))
// Output: Set(3) [ "💛", "💜", "🧡" ]
console.log(Array.from(new Set(justColors)))
// Output: Array(3) [ "💛", "💜", "🧡" ]
console.log([...new Set(justColors)])
// Output: Array(3) [ "💛", "💜", "🧡" ]

// One-liner to find unique object properties with Set:
console.log([...new Set(myObjects.map((o) => o.color))])
// Output: Array(3) [ "💛", "💜", "🧡" ]
