let myAccount = {
    name: 'Andrew Meade',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}

//addIncome
let addIncome = function (account, amount) {
    account.income += amount
}

//resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

//getAccountSummary
//Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

//addIncome
addIncome(myAccount,1000)
//addExpense
addExpense(myAccount,1000)
//addExpense
addExpense(myAccount,1000)
//getACcountSummary
console.log(getAccountSummary(myAccount))
//resetAccount
resetAccount(myAccount)
//getAccountSummary
console.log(getAccountSummary(myAccount))