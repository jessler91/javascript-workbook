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
    constructor (accountNumber, ownersName, transaction = []) {
        this.accountNumber = accountNumber;
        this.ownersName = ownersName;
        this.transaction = transaction;
    }

    balance() {
        account.transaction.reduce(function(total, numb){
            return total + numb;
        })

    }

    addTransaction(payee, amount) {
        let newTrans  = new Transaction(payee, amount);
        this.transaction.push(newTrans);
    }

}

// Create class Transaction 
    // amount: can be either positive or negative
    // payee: passed into the constructor 
    // date: auto set in the constructor

class Transaction {
    constructor (payee, amount, date = new Date()) {
        this.payee = payee;
        this.amount = amount;
        this.date = date;
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
        // let interstTransaction = new Transaction (interestRate);
        // let transacton.amount = balance()*.017;
        
    }

}





let accountA = new Account ("123-345-342", "John Doe");
accountA.addTransaction("Deposit", 1000);
accountA.addTransaction("Target",-45);
accountA.addtransaction("Freebirds", -7.35);
console.log(accountA.balance());  // should print 942.65
accountA.addTransaction("Fraud", -1000);  // this should not go through
console.log(accountA.balance()); // should print 942.65


let accountB = new Account ("123-345-342", "John Doe");
accountB.deposit(1000);
accountB.charge(-45);
accountB.charge(-7.35);
console.log(accountB.balance());  // should print 942.65
accountB.charge(-1000);  // this should not go through
console.log(accountB.balance()); // should print 942.65




