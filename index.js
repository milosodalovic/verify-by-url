import pkg from 'follow-redirects'
const { https } = pkg
import fs from 'node:fs'


let urls = fs.readFileSync('./urls.json').toString()
urls = JSON.parse(urls)

const decodedUrls = urls.map((u) => decodeURI(u))

decodedUrls.forEach((u) => {
  const request = https.request(u, (response) => {
    if (response.statusCode !== 200) {
      console.log(response.statusCode)
    }
  })
  request.end()
})
