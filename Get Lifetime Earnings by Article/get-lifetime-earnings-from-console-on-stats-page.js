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

const WAIT_TIME_BEFORE_PROCESSING = 15
const WAIT_TIME_BETWEEN_POSTS = 0.5
// Wait 15 seconds for that to finish before moving on

const titlesWithEarnings = []

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
        console.log(`Fetched post ${postCount}`)
        postCount += 1
        return setTimeout(
          resolve,
          WAIT_TIME_BETWEEN_POSTS * 1000 * (Math.random() + 0.5) * postCount
        )
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
              titlesWithEarnings.push(`${title},${h2.textContent},${url}`)
          }
        }
      })
    )
    .then(() => {
      titlesWithEarnings.unshift("Article Title,Lifetime Earnings,URL") // Add a new line to the beginning
      // titlesWithEarnings.push("\n") // Add a new line to the end
      // Output the data as a .csv (comma separated list for Excel)
      console.log(titlesWithEarnings.join("\n"))
    })
})

// Stats page URL:
// https://medium.com/me/stats/post/976216131c2e
// Actual post URL:
// https://medium.com/p/976216131c2e
