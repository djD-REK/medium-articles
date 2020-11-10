// Create an array with three Date objects:
const datesArray = [
  new Date(3005, 00, 01),
  new Date(3001, 00, 01),
  new Date(3001, 00, 01),
]
// Note that the second parameter to the Date()
// constructor is a monthIndex, so 0 is January.

// Output the dates by using .map() and .toDateString():
console.log(...datesArray.map((date) => date.toDateString()))
// Output: Tue Jan 01 3005 Thu Jan 01 3001 Thu Jan 01 3001

/* Each of these Dates has a different object reference,    *
 * meaning that using Set  would not remove the duplicates. *
 *                                                          *
 * To find the unique Dates based on the month, day & year, *
 * we will compare using Date.prototype.toDateString().     */

// Initialize an empty array to hold the unique dates:
const uniqueDatesArray = []
// Initialize an empty Set for the unique date strings:
const uniqueDatesSet = new Set()
// Then loop through the Dates array using for...of:
for (const date of datesArray) {
  // Create a string primitive for the Date
  // including just the year, month, and day:
  const dateString = date.toDateString()
  if (!uniqueDatesSet.has(dateString)) {
    // We only add a Date to the array one time
    uniqueDatesArray.push(date)
  }
  // A Set will only ever add one copy of each string:
  uniqueDatesSet.add(dateString)
}
// Output the dates by using .map() and .toDateString():
console.log(...uniqueDatesArray.map((d) => d.toDateString()))
// Output: Tue Jan 01 3005 Thu Jan 01 3001

// Alternatively, use .map() to convert the Set of
// date strings back into an array of Date objects:
const uniqueStrings = [...uniqueDatesSet]
const datesArrayFromSet = uniqueStrings.map((s) => new Date(s))
console.log(...datesArrayFromSet.map((d) => d.toDateString()))
// Output: Tue Jan 01 3005 Thu Jan 01 3001

// That means you can skip the for...of loop above in
// favor of using .map() to make a one-liner:
const uniqueDatesAsArray = [
  ...new Set(datesArray.map((date) => date.toDateString())),
].map((string) => new Date(string))
// Output the dates by using .map() and .toDateString():
console.log(...uniqueDatesAsArray.map((d) => d.toDateString()))
// Output: Tue Jan 01 3005 Thu Jan 01 3001
