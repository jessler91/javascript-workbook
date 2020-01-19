// =============== Justin Essler ==================== //
// ============= Week 5.2 Assignment ================ //
// ============ (instead of checkers) =============== //
// =========== (on branch: marsMission) ============= //


// Class Acccount 
    // constructor 
    //  - accountNumber: pssed into the constructor
    //  - ownersName: passed into the constructor
    //  - list of transaction: starts empty
    // methods
    //  - balance(): should loop through all the transactions 
    //    - and return the current balance
    //  - addTransaction(payee, amount); 
    //    - checks to see it the amount is valid 
    //    - (ie. cannot debit more than the balance)

class Account {
    constructor (accountNumber, ownersName, transaction) {
        this.accountNumber = accountNumber;
        this.ownersName = ownersName;
        this.transaction = transaction;
    }

    balance() {

    }

    addTransaction(payee, amount) {
        let newTrans  = new Transaction(payee, amount);
        transaction.push(newTrans);
    }

}

// Create class Transaction 
    // amount: can be either positive or negative
    // payee: passed into the constructor 
    // date: auto set in the constructor

class Transaction {
    constructor (amount, payee, date) {
        this.amount = amount;
        this.payee = payee;
        this.date = new date();
    }
}

// Class - Create Savings Account
//  - Create a savings account that exteneds account
//  - should have interest rate
//  - method: accrueInterest(): this method should get the balance,
//  - and add a new transaction to the list of transactions for the interest accrued

class savingsAccount extends Account {
    constructor(accountNumber, ownersName, transaction, interestRate) {
        super(accountNumber, ownersName, transaction);
        this.interestRate = interestRate;
    }

    accrueInterest() {
    }

}





let accountA = new Account ("123-345-342", "John Doe");
accountA.addTransaction("Deposit", 1000);
accountA.addTransaction("Target",-45);
accountA.addtransaction("Freebirds", -7.35);
console.log(accountA.balance());  // should print 942.65
accountA.addTransaction("Fraud", -1000);  // this should not go through
console.log(accountA.balance()); // should print 942.65


let accountA = new Account ("123-345-342", "John Doe");
accountA.deposit(1000);
accountA.charge(-45);
accountA.charge(-7.35);
console.log(accountA.balance());  // should print 942.65
accountA.charge(-1000);  // this should not go through
console.log(accountA.balance()); // should print 942.65




