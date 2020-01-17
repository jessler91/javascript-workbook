

// ================== Notes ==================
// ============= Week # 5 Day # 1 ==================

// WarmUp - Video #1
// PROMPT 1 Given an array of numbers, raise each number by the power of 2 
// and return the sum of all the numbers that are evenly divisible by 4. 

const myArr1 = [1, 5, 10, 4, 2] 

let myArr2 = myArr1.map((e) => {
    return e * e;
})

let myArr3 = myArr2.filter((value) => {
    if (e % 4 === 0) return true;
})

let arr4 = myArr3.reduce(function(prev, cur){
 return prev = current;
})

console.log(sum);

// Class Notes
// Object Oriented Programming

class Address {
    constructor(iLine1, iCity, iState, iZip) {
        this.line1 = iLine1;
        this.city = iCity;
        this.state = iState;
        this.zip = iZip;
    }

    generateString(){
        return `${this.line1}
        ${this.city}, ${this.state}, ${this.zip}`
    }
}

let school = new Address("314 ighland Blvd", "Austin", "TX", "78752");
console.log(school.generateString());

class DL {
    constructor(iName, iNumber) {
        this.name = iName;
        this.number = iNumber;
    }
    updateAddress(someAddress){
        this.address = someAddress;
    }
}

let d1 = new DL ("Justin Essler", 145728)

console.log(`${d1.name} lives at ${d1.address}`);





// =============== Homework Notes - marsMission ==========================

// class represents a crew member
// crew member should have a name, job, specialSkill
// you should have a method called enterShip()
// this method should take in ship as input
// this method should updat  the crew list

// class represents a ship
// ship has a name, type, and ability
// ship constructor should set an array called crew to be any empty array

// ship should have a method called missionStatement()
// this method should return "Can't perform mission yet" if it has no crew
// this method should return the ship's ability if there is at least 1 crew member








// ==================== Notes ==================
// ============== Week # 5 Day # 2 ==================
// WarmUp - Video #1


array1 = ["john", "mark", "matt", "bob"];
array2 = ["jim","mark", "andrew", "matt"];

var testDiff = diff(array1, array2);
console.log("the shared elements are", testDiff.shared);
console.log("the sideA elements are", testDiff.sideA);
console.log("the sideB elements are", testDiff.sideB);

// testDiff => {
//     shared: ["mark", "matt"],
//     sideA: ["john", "bob"],
//     sideB: ["jim", "andrew"]
// }


function diff(array1, array2) {
    // 1. forEach element in the first array
    // check to see if the element exists in the second array:
        // if it does, it is a shared element
        // if it does not, it is a Side A element
    // for each element in the second array
        // check to see if it exists in the first array
        // if it does not, it is a Side B element

        // or.... better said....

    // filter down the first array to only elements that are also in the second array
    // filter down the first array to only the elements that are not in the second array
    // filter down the second array to only the elements that are not in the first array


    array1.forEach(function(element) {
       let shared = array2.inculdes(element);
    });

    let sideA = array1.filter(function() {
        return !array2.inculdes(element);
        let missing = !shared;
        return missing;

    });

    let sideB = arrray2.filter(function(){
        return !array1.inculdes(element);
    });


    var result = {
        shared: shared,
        sideA: sideA,
        sideB: sideB
    }

    return result;
}


// example for inheretance and class
// video #2

class cars {
    // engine
    // passenger capicity
    constructor (engineSize, passengerCapacity, make, model){
        this.engineSize = engineSize;
        this.passengerCapacity = passengerCapacity;
        this.make = make;
        this.model = model;
    }

    // A ford Focus with 4 cylinder engine
    // a ford F150 with an  8 cylinger engine
    // this method generates a generic descripton for the ccar
    description(){
        return `This ${this.make} ${this.model} has a ${this.engineSize} cylinder engine with ${passengerCapacity}`
    }
}


let mine = new car (4,5,"Mazda", "3");
console.log(mine.description());





class truck extends car {
    // bedSize
    constructor (engineSize, passengerCapacity, make, model, bedSize) {
        super(engineSize, passengerCapacity, make, model);
        this.bedSize = bedSize;
    }
}


let someTruck = new tuuck (8,5,"ford","long");


class sedan extends car {
    // trunkSize
    // isHatchBack
    constructor (engineSize, passengerCapacity, make, model, trunkSize, isHatchBack) {
        super(engineSize, passengerCapacity, make, model);
        this.isHatchBack =isHatchBack;
        this.trunkSize = trunkSize;
    }
}




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