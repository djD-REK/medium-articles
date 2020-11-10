// Get Lifetime Earnings for Your Medium Articles from the Stats Page //

/* Note that this software accesses the Medium's server in an automatic way that could at some point lead to your connection to Medium's server being blocked. It hasn't happened to me, but please be aware. */

/* Instructions for use
1) Copy all code found in this file
2) Open up your Medium stats page https://medium.com/me/stats
3) Open up your browser console (F12 key, click Console)
4) Paste the code and hit Enter
5) Wait (about 2 minutes)
6) Click the drop-down for the Promise (pink text)
7) Right-click and "Copy Message"
8) Save to a text file (stats.txt) on your computer using a text editor such as Notepad or Visual Studio Code
9) Delete the bottom line if it reads "debugger eval code"
10) Open with Excel or Google Sheets (the "delimiter" is a tab character)
11) ...
12) Profit?

*/

/*
MIT License

Copyright (c) 2020 Dr. Derek Austin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const WAIT_TIME_BEFORE_PROCESSING = 15 // increase if not reaching bottom of page
const WAIT_TIME_BETWEEN_POSTS = 0.5 // set to 0 to not wait between posts & get results quicker
const LOG_HOW_MANY_PENDING_MESSAGES = 10 // set to 0 to turn off time elapsed messages
const LOG_PENDING_MESSAGE_EVERY_X_SECONDS = 10

const timerArray = Array(LOG_HOW_MANY_PENDING_MESSAGES)
  .fill(0)
  .map((emptyValue, index) => index + 1)

for (const timerCount of timerArray) {
  const actualTimerCount = timerCount * LOG_PENDING_MESSAGE_EVERY_X_SECONDS
  new Promise((resolve) => setTimeout(resolve, actualTimerCount * 1000)).then(
    () => {
      console.log(`${actualTimerCount} seconds have passed`)
    }
  )
}

console.log(
  `Please wait ${WAIT_TIME_BEFORE_PROCESSING} seconds to reach the bottom of the page.`
)

// Scroll to bottom of page
// Credit: https://www.alecjacobson.com/weblog/?p=758
function scrollToBottom() {
  bottom = document.body.scrollHeight
  current = window.innerHeight + document.body.scrollTop
  if (bottom - current > 0) {
    window.scrollTo(0, bottom)
    setTimeout("scrollToBottom()", 1000)
  }
}
scrollToBottom()

const titlesWithEarnings = []

let maxWaitTime = 0
new Promise((resolve) =>
  setTimeout(resolve, WAIT_TIME_BEFORE_PROCESSING * 1000)
).then(() => {
  const allPostsMap = new Map() // {title: url}
  // Crawl stats page for all posts
  for (const a of document.querySelectorAll("div.sortableTable-title a")) {
    allPostsMap.set(a.textContent, a.href)
    //allPostsMap.push({ title: a.textContent, url: a.href })
  }

  const urlsAsArray = Array.from(allPostsMap.values())
  let postCount = 1
  // For each posts URL, access the page and get lifetime earnings
  Promise.all(
    urlsAsArray.map((url) => {
      return new Promise((resolve) => {
        const waitTime =
          WAIT_TIME_BETWEEN_POSTS * 1000 * (Math.random() + 0.5) * postCount +
          WAIT_TIME_BEFORE_PROCESSING * 1000
        maxWaitTime = waitTime > maxWaitTime ? waitTime : maxWaitTime
        console.log(
          `Queued post ${postCount}; expected total wait time of ${Math.floor(
            maxWaitTime / 1000
          )} seconds`
        )
        postCount += 1
        return setTimeout(resolve, waitTime)
      }).then(() => {
        return fetch(url)
      })
    })
  )
    .then((responses) =>
      Promise.all(responses.map((result) => result.text())).then((texts) => {
        for (const text of texts) {
          // HTML strings
          const htmlDocument = new DOMParser().parseFromString(
            text,
            "text/html"
          )
          const titleNode = htmlDocument.querySelector("title")
          const titleMatch = titleNode
            ? titleNode.textContent.match(/Stats for (.+)/)
            : "Missing Title!"
          const title = Array.isArray(titleMatch)
            ? titleMatch[1]
            : "Missing Title!"
          const urlStatsPage = allPostsMap.get(title)
          const urlMatch = urlStatsPage
            ? urlStatsPage.match(/post\/(.+)\?/)
            : "Missing URL!"
          const url = Array.isArray(urlMatch)
            ? `https://medium.com/p/${urlMatch[1]}`
            : "Missing URL!"
          for (const h2 of htmlDocument.querySelectorAll("div.l h2")) {
            h2.textContent[0] === "$" &&
              titlesWithEarnings.push(`${title}\t${h2.textContent}\t${url}`)
          }
        }
      })
    )
    .then(() => {
      titlesWithEarnings.unshift("Article Title\tLifetime Earnings\tURL") // Add a new line to the beginning
      // titlesWithEarnings.push("\n") // Add a new line to the end
      // Output the data as a .tsv (tab separated list for Excel)
      console.log(titlesWithEarnings.join("\n"))
    })
})

// Stats page URL:
// https://medium.com/me/stats/post/976216131c2e
// Actual post URL:
// https://medium.com/p/976216131c2e
