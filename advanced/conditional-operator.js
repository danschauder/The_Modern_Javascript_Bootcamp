// const myAge = 27
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

const myAge = 27

const showPage = () => {
    console.log('Showing the page')
}

const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'Bob', 'Fred','Danny']

// 1. Print "Team Size: 3 if less than or equal to 4"
// 2. Print "Too many people on your team" otherwise

const msg = team.length<=4 ? `Team Size: ${team.length}` : 'Too many people on your team'

console.log(msg)