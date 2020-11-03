const emojiSet = new Set(["🙋🏼", "🦾", "🦿", "🙋🏼"])

//  Use Set.prototype.keys() or Set.prototype.values()
const emojiIterator = emojiSet.values()
// You can use a for...of loop with an Iterator object
for (const emoji of emojiIterator) {
  console.log(emoji)
}
// emojiSet.keys() is equivalent to: emojiSet.values()
for (const emoji of emojiSet.keys()) {
  console.log(emoji)
}
// Output: "🙋🏼", "🦾", "🦿"

// Use Set.prototype.forEach() with a Callback Function
emojiSet.forEach((emoji) => {
  console.log(emoji)
})
// Output: "🙋🏼", "🦾", "🦿"

//  Use a for...of Loop Directly With the New Set
for (const emoji of emojiSet) {
  console.log(emoji)
}
// Output: "🙋🏼", "🦾", "🦿"
