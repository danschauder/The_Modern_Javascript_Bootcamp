// Primitive value: string, number, boolean, null, undefined


// //product --> Object.prototype --> null
// const product = {
//     name: 'Influence'
// }

// Object.prototype.someNewMethod = () => 'This is the new function'

// // hasOwnProperty
// console.log(product.someNewMethod())
// console.log(product)


// Array: myArray --> Array.prototype --> Object.prototype --> null

// const team = ['Luke', 'Maddison']
// const team = new Array(['Luke', 'Maddison'])
// console.log(team.hasOwnProperty('filter'))

// Function: myFunc --> Function.prototype --> Object.prototype --> null

// const getScore = () => 1
// console.log(getScore)


// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = 'Computer'
console.log(product)

const otherProduct = new String('Phone')
console.log(otherProduct)