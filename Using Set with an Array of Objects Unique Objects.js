// This array contains 2 objects repeated twice each.
const objectsArray = [
  { id: 1, emoji: "🎸" },
  { id: 2, emoji: "🎷" },
  { id: 1, emoji: "🎸" },
  { id: 2, emoji: "🎷" },
]
// Each of these objects has a different object reference.
// That means each object is unique according to Set:
console.log(`${objectsArray.length} objects`)
// Output: 4 objects
const uniqueObjectReferences = [...new Set(objectsArray)]
console.log(`${uniqueObjectReferences.length} objects`)
// Output: 4 objects

/* To find the unique objects based on their contents,
 * we need to use JSON.stringify(), which turns the
 * object into a string, which will then work with Set. */

// First, make an array to hold the unique objects
// and an empty Set for the unique JSON strings.
const uniqueObjectsArray = []
const uniqueObjectsSet = new Set()
// Then loop through the objects array using for...of:
for (const object of objectsArray) {
  // Create a string primitive in JSON-format
  const objectJSON = JSON.stringify(object)
  if (!uniqueObjectsSet.has(objectJSON)) {
    // We only add an object to the array one time
    uniqueObjectsArray.push(object)
  }
  // A Set will only ever add one copy of each string:
  uniqueObjectsSet.add(objectJSON)
}
console.log(`${uniqueObjectsArray.length} objects`)
// Output: 2 objects
console.log(...uniqueObjectsArray)
// [ { id: 1, emoji: "🎸" }, { id: 2, emoji: "🎷" } ]

// You could also convert the JSON strings in the Set
// back to objects directly using JSON.parse():
const strings = [...uniqueObjectsSet]
const parsedUniques = strings.map((s) => JSON.parse(s))
console.log(`${parsedUniques.length} objects`)
// Output: 2 objects
console.log(...parsedUniques)
// [ { id: 1, emoji: "🎸" }, { id: 2, emoji: "🎷" } ]

// That means you can skip the for...of loop above in
// favor of using .map() to make a one-liner:
const uniqueObjectsOneLiner = [
  ...new Set(objectsArray.map((o) => JSON.stringify(o))),
].map((string) => JSON.parse(string))
console.log(`${uniqueObjectsOneLiner.length} objects`)
// Output: 2 objects
console.log(...uniqueObjectsOneLiner)
// [ { id: 1, emoji: "🎸" }, { id: 2, emoji: "🎷" } ]
