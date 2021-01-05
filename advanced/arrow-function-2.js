//This works
const add = function (a, b) {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

//arguments variable doesn't exist for arrow functions
//This syntax fails
// const addArrow = (a,b) => arguments[0] + arguments[1]
// console.log(addArrow(11, 22, 33, 44))


//When defining methods/object properties, arrow functions
//don't have access to the "this" scope. Below syntax fails.
//Should use regular function syntax for defining methods.
const car = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())

//As an alternative for defining methods, you can get rid
// of the colon
const car2 = {
    color: 'Blue',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car2.getSummary())