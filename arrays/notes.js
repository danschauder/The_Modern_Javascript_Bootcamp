const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}




// console.log(findNotes(notes, 'work'))

// const note = findNote(notes, 'office modification')
// console.log(note)


// //removes item from end, returns it
// console.log(notes.pop())

// //adds an item to the end
// notes.push('My new note')

// //removes item from beginning, returns it
// console.log(notes.shift())

// //adds an item to the beginning
// notes.unshift('My first note')

//Removes items from a specified index
//Optional 3rd argument to add an item at that index
// notes.splice(1, 1, 'This is the new second item')

//Can use index notation to update values
// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

// 2 objects are only equal if they refer to the exact same object in memory
// below returns false
// console.log({} === {})



// let someObject = {}
// let otherObject = someObject
// // below returns true
// console.log(someObject === otherObject)

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habits to work on'
// })

// console.log(index)

sortNotes(notes)
console.log(notes)