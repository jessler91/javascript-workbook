
// Week 5.2 Assignment (instead of checkers)

// Goal #1 - Create two Classes

// class Acccount
    // atributes / fields
    //  - account number // this is passed into the constructor
    //  - owners name // this is passed intt he constructor
    //  - list of transactions // starts empty
    // method 
    //  - balance(): should loop through all the transaction 
    //  - and return the current balance
    //  - addTransaction(payee, amount); // checks to see it the amount is valid (ie. cannot debit more than the balance)


    // option....
    // instead of addTransaction()
    // deposit(amt)
    // charge(payee, amount)



// class Transaction
    // amount (can be either positive or negative)
    // payee // passed intot he constructor 
    // date // auto set int he constructor



// Goal #2 - Extend the 

// Create A savings account that exteneds account
// should have interest rate
// method: accrueInterest(): this method should get the balance,
// and add a new transaction to the list of transactions for the interest accrued




class account {

    addTransaction(payee, amount) {

        let newTrans  = new Transaction(payee, amount);
        transaction.push(newTrans);
    }

}

// class Transaction {
//     constructor (...) {
//         this.date = new Date();
//     }
// }


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