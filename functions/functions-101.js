let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)


// Challenge Area 

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (ftemp) {
    let ctemp = (ftemp-32) * (5/9)
    return ctemp
}

// call a couple of times (32 ->0) (68 -> 20)
let temp32 = convertFahrenheitToCelsius(32)
let temp68 = convertFahrenheitToCelsius(68)

// Print the converted values
console.log(temp32)
console.log(temp68)