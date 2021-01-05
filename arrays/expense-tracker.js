const account = {
    name : 'Dan Schauder',
    expenses : [],
    income: [],
    addExpense : function (desc, amt) {
        this.expenses.push({description: desc, amount: amt})
    },
    addIncome: function (desc, amt) {
        this.income.push({description: desc, amount: amt})
    },
    getAccountSummary: function () {
        let expenseTotal = 0
        let incomeTotal = 0
        this.expenses.forEach(function (expense, index) {
            expenseTotal += expense.amount
        })
        this.income.forEach(function (item, index){
            incomeTotal += item.amount
        })
        return `${this.name} has a balance of $${incomeTotal - expenseTotal}. $${incomeTotal} in income. $${expenseTotal} in expenses.`
    }
}


account.addExpense('Rent',950)
account.addExpense('Coffe',2)
account.addIncome('Job',1000)
console.log(account.getAccountSummary())