const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// create a function to remove a todo by text value

const deleteTodo = function (arr, str) {
    const idx = arr.findIndex(function (todo, index){
        return todo.text.toLowerCase() === str.toLowerCase()
    })
    if (idx>=0) {
        arr.splice(idx,1)
    }
}


// create a function to get list of to dos with completed set to false
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

// create a function to sort the list of todos based on completion status
const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'buy food')
// console.log(todos)