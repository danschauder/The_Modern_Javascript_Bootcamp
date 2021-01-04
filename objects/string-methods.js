let name = '  Andrew Mead'

// Length property
console.log(name.length)

//Convert to Uppercase
console.log(name.toUpperCase())

//Convert to Lowercase
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('awefawefa'))

// Trim
console.log(name.trim())

//Challenge

//isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (pass) {
    return (pass.length>8 && !pass.includes('password'))
}

console.log(isValidPassword('adfp'))
console.log(isValidPassword('abc123!#$!(@*'))
console.log(isValidPassword('abc123!#$!(@*password'))