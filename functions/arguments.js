//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge area

//total, tipPercent, default tip  value as a decimal

let getTip = function (total, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

//use it
let tip = getTip(60)
console.log(tip)