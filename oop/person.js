// Prototypal Inheritance

// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        // Andrew is a {position}
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor (firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const isPassing = this.grade>=70
        return `${this.firstName} ${this.lastName} is ${isPassing ? 'passing' : 'failing'} the class`
    }

    updateGrade(points) {
        this.grade += points
    }
}

const me = new Employee('Gregory', 'Danielson', 22, 'Teacher', ['Baseball', 'Surfing'])
me.fullName = 'Clancey Turner'
console.log(me.getBio())
// me.updateGrade(50)
// console.log(me.getBio())
// me.updateGrade(-40)
// console.log(me.getBio())

// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`
//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })
//     return bio
// }

// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

// const me = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking'])
// // console.log(me)
// me.setName('Alexis Turner')

// console.log(me.getBio())

// const person2 = new Person('Clancy','Turner',51)
// console.log(person2.getBio())

// console.log(me.getYearsLeft())