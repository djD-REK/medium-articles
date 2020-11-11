const myStrings = ["👌", "👌", "👌", "🐱‍👤", "🐱‍👤", "🐱‍🚀", "🐱‍🚀"]
const myUniqueStrings = []
const myStringObject = {} // Used to check for uniqueness

for (const string of myStrings) {
  // Object keys that aren't yet set are undefined,
  // and undefined is a falsy value in JavaScript.
  if (!myStringObject[string]) {
    myUniqueStrings.push(string)
    myStringObject[string] = true
  }
}

// JavaScript objects must have unique keys (properties),
// so this method finds the unique strings in an array.
console.log(myUniqueStrings)
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]

// Alternatively you can get the keys with Object.keys()
console.log(Array.from(Object.keys(myStringObject)))
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]

// Equivalent to using the spread operator:
console.log([...Object.keys(myStringObject)])
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]
