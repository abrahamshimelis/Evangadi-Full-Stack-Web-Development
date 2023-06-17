const first = require('./myFirst.js')
const second = require('./mySecond.js')
const fs = require('fs')

// console.log(first.myMultiplier(5))
// console.log(second.myMultiplier(5))

const result = first.myMultiplier(14)
const content = "The value of 14 when  passed through the myMultiplier function is (" + result + ")"
const path = './results.txt'

fs.writeFile(path, content, err => {
    if (err) {
        console.error(err)
    }
    console.log('file written successfully')
})

