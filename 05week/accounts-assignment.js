// =============== Justin Essler ==================== //
// ============= Week 5.2 Assignment ================ //
// ============ (instead of checkers) =============== //
// =========== (on branch: marsMission) ============= //

// at the time of assignment submission the get balance() method is still not working and returns undefined,
// assignment is already late enough, giving up and will have to come back 


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

    console.log("at the top of page");

    class Account {
        constructor (accountNumber, ownersName, transaction = []) {
            this.accountNumber = accountNumber;
            this.ownersName = ownersName;
            this.transaction = transaction;
        }
    
        balance() {
            // this method should loop through the list of transactions
            this.transaction.reduce(function(total, currentValue){
                return {amount: total.amount + currentValue.amount}
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
        constructor(accountNumber, ownersName, transaction = [], interestRate) {
            super(accountNumber, ownersName, transaction);
            this.interestRate = interestRate;
        }
    
        addInterestTransaction() {
            let interestEarned = (this.balance() * this.interestRate);
            let newInterestTransaction = new Transaction (this.payee, interestEarned, new Date());
            this.transaction.push(newInterestTransaction);
            
        }
    
    }
    
    console.log("at the middle of page");
    
    // My working tests

    // create a checking account for Franklin
    let myKeyAccount = new Account ("xxx-xxx-cca", "Franklin Walters")


    // Add a few initial deposits
    myKeyAccount.addTransaction("deposit#2", 2500);
    myKeyAccount.addTransaction("deposit#3", 650);
    // Add a few initial expense transactions
    myKeyAccount.addTransaction("chickfla", -10.42);
    myKeyAccount.addTransaction("Kohls", -47.35);
    myKeyAccount.addTransaction("ATMOS GAS", -37.35);



    console.log(myKeyAccount.transaction);


    // Get the balance of myKeyAccount
    console.log(myKeyAccount.balance());




    
    // create a checking account for  Savings Walters
    let mySavingsAccount = new savingsAccount ("xxx-xxx-csa", "Franklin Savings Walters", transaction = [], .015)

    // Add a few initial savings account deposits
    mySavingsAccount.addTransaction("savings-deposit-#1", 3500);
    mySavingsAccount.addTransaction("savings-deposit-#2", 3500);
    // Add a few initial savings account withdraws
    mySavingsAccount.addTransaction("savings-withdraw-#1", -300);
    mySavingsAccount.addTransaction("savings-withdraw-#2", -300);

    // Get the balance of mySavingsAccount
    mySavingsAccount.balance();

    // Add an interest transaction to mySavingsAccount
    mySavingsAccount.addInterestTransaction();





    console.log(mySavingsAccount.transaction);

    console.log(mySavingsAccount.balance());








    
    // Yousif example tests

    // let accountA = new Account ("123-345-342", "John Doe");
    // accountA.addTransaction("Deposit", 1000);
    // accountA.addTransaction("Target",-45);
    // accountA.addtransaction("Freebirds", -7.35);
    // console.log(accountA.balance());  // should print 942.65
    // accountA.addTransaction("Fraud", -1000);  // this should not go through
    // console.log(accountA.balance()); // should print 942.65
    
    
    // let accountB = new Account ("123-345-342", "John Doe");
    // accountB.deposit(1000);
    // accountB.charge(-45);
    // accountB.charge(-7.35);
    // console.log(accountB.balance());  // should print 942.65
    // accountB.charge(-1000);  // this should not go through
    // console.log(accountB.balance()); // should print 942.65
    
    
    
    
    