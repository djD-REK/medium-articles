var stringsES5 = ["👌", "👌", "👌", "🐱‍👤", "🐱‍👤", "🐱‍🚀", "🐱‍🚀"]
var uniqueStringsES5 = []
var stringObjectES5 = {}

// Since JavaScript objects must have unique properties
// (keys), you can find unique strings using an object.
for (var i = 0; i < stringsES5.length; i++) {
  var string = stringsES5[i]
  // Object keys that haven't been set are undefined,
  // which is one of JavaScript's falsy values.
  if (!myStringObject[string]) {
    myUniqueStrings.push(string)
    myStringObject[string] = true
  }
}

// In ES5, you can't use Array.from(), nor the ... spread
// operator, so you must .push() the strings to a new array.
console.log(myUniqueStrings)
// Output: Array(3) [ "👌", "🐱‍👤", "🐱‍🚀" ]
