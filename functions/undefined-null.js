// Undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

//Undefined for function arguments
let square = function (num) {
    console.log(num)
}


//Undefined for function default return value
let result = square()
console.log(result)


//Use null for the developer to explicitly clear a value (whereas undefined is the default empty value)
let age = 27
age = null
console.log(age)