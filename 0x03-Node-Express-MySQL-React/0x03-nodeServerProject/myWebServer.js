// const http = require("http")
// const randNum = require("./randomNumber")
// const fs = require("fs")
// const url = require("url")
// const mimeTypes = require("mime-types")
// const mimeTypeLookUp = mimeTypes.lookup

// // console.log(http)
// // console.log(fs)

// const server = http.createServer((req, res) => {
//     res.writeHead(200)
//     // res.end("Request received and processed")
//     // let currentNum = randNum.random()
//     // res.end('"' + currentNum + '"')
//     let parsedUrl = url.parse(req.url, true)
//     // console.log(parsedUrl)
//     let parsedUrlPath = parsedUrl.pathname

//     if (parsedUrlPath === "/") {
//         parsedUrlPath = "/about.html"
//     } else if (parsedUrlPath === "/apple") {
//         parsedUrlPath = "/apple.html"
//     }
//     let setMimeOfFileToServe = mimeTypeLookUp(parsedUrlPath)
//     let locationofFileToServe = __dirname + "/static/" + parsedUrlPath
//     fs.readFile(locationofFileToServe, (err, data) => {
//         res.writeHead(200, { "content-type": setMimeOfFileToServe })
        
//         res.end(data)
//     })
// }
// )

// server.listen(1234, () => {
//     console.log('Server is listening to HTTP requests at port 1234')
// })

const express = require("express")

const app = express()
app.use("/apple", express.static("static"))

app.listen(3002, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("express server running on port 1234")
})