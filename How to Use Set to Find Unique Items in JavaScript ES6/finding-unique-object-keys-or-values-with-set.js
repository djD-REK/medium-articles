// You can use Object.values() with Set to find unique
// values in an object, but keys are always unique.
const myObject = { hello: "🌏", hi: "🌏", howdy: "🚯" }

console.log(new Set(Object.keys(myObject)))
// Output: Set(3) [ "hello", "hi", "howdy" ]
console.log(new Set(Object.values(myObject)))
// Output: Set(2) [ "🌏", "🚯" ]
console.log(new Set(Object.entries(myObject)))
// Output: Set(3) [[ "hello", "🌏" ], ...]
