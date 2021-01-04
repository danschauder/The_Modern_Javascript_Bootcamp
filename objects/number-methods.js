let num = 103.941

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor((Math.random() * (max - min + 1))) + min
// 0 - .999999
console.log(randomNum)


//Challenge area

// 1 - 5 - true if correct - false if not correct

let makeGuess = function (g) {
    let guessMin = 1
    let guessMax = 5
    let val = Math.floor((Math.random() * (guessMax - guessMin + 1))) + guessMin
    return val === g
}

console.log(makeGuess(1))