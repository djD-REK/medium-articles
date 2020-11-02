const emojiSet = new Set(["🙋🏼", "🦾", "🦿", "🙋🏼"])
const emojiIterator = emojiSet.values()
for (const emoji of emojiIterator) { console.log(emoji) }
// emojiSet.keys() is equivalent to: emojiSet.values()
for (const emoji of emojiSet.keys()) { console.log(emoji) }
// Output: "🙋🏼", "🦾", "🦿"

// 1 - Use Set.prototype.keys() or Set.prototype.values()
These two methods are equivalent; both return a// 2 - Use Set.prototype.forEach() with a Callback Function
 Docs
Of course, you can use an arrow function as the callback function, same as you would do when working with an array.
// 3 - Use a for...of Loop Directly With the New Set 
As Set is a type of iterable object in JavaScript, a for...of loop will work with a Set the same way it would with an array.