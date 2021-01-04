// === - equality operator
// !== - no equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator




let temp = 180
let isFreezing = temp <= 32

if (temp <= 32) {
    console.log('It is freezing outside!')
}


if (temp >=110) {
    console.log('It is way too hot outside')
}

// Challenge area 

//create age set to your age
let age = 75

//calculate is child - if they are 7 or under
let isChild = age<=7

// calculate is senior - if they are 65 or older
let isSenior = age>=65

// print is child value 
console.log(isChild)

// print is senior value 
console.log(isSenior)

//if 7 or under print message about child pricing
if (isChild){
    console.log('You can get child pricing')
}


// if 65 or older print message about senior discount
if (isSenior) {
    console.log('You qualify for the senior discount')
}