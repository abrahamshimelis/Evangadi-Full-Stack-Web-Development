// console.log('My first module')

function myMultiplier(num) {
    return 2 * num
}

let product = myMultiplier(4)

// console.log(product)

module.exports.myMultiplier = myMultiplier

// console.log(module.exports) 