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
