var firstName = 'Andrew'
firstName = 'Mike'

//redefinition is allowed :(
var firstName = 'Jen'

console.log(firstName)


//defaults to global scope if not defined within a function :(
if (10 === 10) {
    var firstName2 = 'Jen'
}

console.log(firstName2)


//Weird behavior. Will hoist the declaration but not the assignment
console.log(age)
var age=32