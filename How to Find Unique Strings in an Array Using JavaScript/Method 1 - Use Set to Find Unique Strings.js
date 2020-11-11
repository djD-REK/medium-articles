const strings = ["👌", "👌", "👌", "🐱‍👤", "🐱‍👤", "🐱‍🚀", "🐱‍🚀"]
const stringsSet = new Set(strings)
const uniqueStrings = [...stringsSet]
console.log(uniqueStrings)
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]

// One-liner using the method Array.from():
console.log(Array.from(new Set(strings)))
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]

// Equivalent to using the spread operator:
console.log([...new Set(strings)])
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]
