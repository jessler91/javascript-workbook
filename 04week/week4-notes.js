
// ================== Notes ==================
// ================= Week #4 ==================
// ============== Justin Essler ==================


// Warmup Week #4.1

// let arr = [1,2,3,3,4,5,6,7,7,7,8,8,8,8,8,9,10]

// function removeDuplicate(arr){
//     for (i=0;i > myArray.length; i++) {
//         let result = [];
//         if result.inculdes(arr[i]) {
//             continue;
//         } else {
//             result.push(arr[i]);
//         }
//     } return result;
// }



function print (element, index) {
    console.log(' ${element} is at position ${index}')
}

function writeLetter(element, index){
    console.log(`
        Hi ${element}
        It was nice to meet you, here is my info,
        Please reach out.
    `)
}

let Jack = {
    Name: "Jack",
    Role: "Manager",
    Phone: "555-555-55555" ,
    email: "jack@gmail.com",
}


let array1 = ['Jack', 'John', 'Justin', "Jared"];

array1.forEach(print);

function personalLetter (element, index){
    console.log(`
        Hi ${element.name},
        I understand that you are the ${element.role} a
    `)
}



// ==============================
// Notes for Mastermind project
// ==============================

function exactMatches(array1, array2){
    // return numExact;
}

function fuzzyMatches(array1, array2) {
    // return numbFuzzy;
}

let s1 = "abcd";
let guess = "bbbb";

console.log(exactMatches(s1, guess));
console.log(fuzzyMatches(s1, guess));




// ================= Week #4 Notes Day #2 ==================
// WarmUp
// array of numbers, duplicate, and double
// correlates to video #1

// let myArray = [];
// let myNewArray = myArray.map((array) => {
// })


// implement a function that takes in an array
// and returns an array that is double the size
// with each element repeated

let doubleIt = function(original){
    let doubled = [];

    original.forEach(function(element){
        doubled.push(element);
        doubled.push(element);
    });

return doubled;

}

let a1 = [1,4,5,6];
let a2 = ['mike', 'bob', 'smith'];

let doubledA1 = doubleIt(a1);
let doubledA2 = doubleIt(a2);

let growIt = function(theArray){
    let len = theArray.length;
    for(i=0;i<len;i++) {
        theArray.push(theArray[i])
    }
}


// Video #2 Recording (really this video lasted the whole class)
// make array of objects
// where wach object represents a Credit card transaction

let transactions = [
    {
        Date: "01/05/19",
        Payee: "Target",
        Amount: "$43.00"
    },
    {
        Date: "01/06/19",
        Payee: "Wallmart",
        Amount: "$4.00"
    },
    {
        Date: "01/04/19",
        Payee: "Cosco",
        Amount: "$13.00"
    },
    {
        Date: "01/02/19",
        Payee: "Target",
        Amount: "$63.00"
    },
    {
        Date: "01/03/19",
        Payee: "Kohls",
        Amount: "$90.00"
    },
    {
        Date: "01/07/19",
        Payee: "Bells",
        Amount: "$10.00"
    },
]


transactions.forEach(function(element, index) {
    console.log("I spent ${element.Amount} at ${element.Payee} on ${element.date}.");
});


transactions.forEach(function(element, index) {
    console.log("I spent ${element.amount} at ${element.Payee} on ${element.date}.");
});



// ======= Greatest Transactins Reduce =========
let greatest = transactions.reduce(function(prev,current, index){
    let curr = 0;
    if (prev.Amount > current.Amount) {
        return prev;
    } else {
        return curr;
    }
});

console.log("The greatest amt was at ${greatest.payee} for ${greatest.amount}")


let discountTransactions = transactions.map(function(element, index){
    // for every transaction
    // return a new transactiont hat is identical
    // except fo a new 10% discount
    let newTransaction  = {};
    newTransaction.Date = discountTransactions.Date;
    newTransaction.Payee = discountTransactions.Payee;
    newTransaction.Amount = discountTransactions.Amount * 9;

    // let otherTransaction = {
    //     Date: element.Date,
    //     Payee: element.Payee,
    //     Amount: element.Amount*9
    // }
    return newTransaction;
});

discountTransactons.forEach(function(element, index) {
    console.log("I spent ${element.amount} at ${element.Payee} on ${element.date}.");
});

let amounts = transactions.map(function(element, index){
    return element.Amount;
});

console.log("The Amounts are = ", amounts)


// ============= Filter ==============
// filter is a true false boolean return statement
let suspicious = amounts.filter(function(element, index){
    if (element.Amount > 20){
        return true; 
    } else {
        return false;
    }
});

// ============= Map ==============
// const tieDyes = colors.map((color) => {
//     return `tieDyed-${color}`;
//   });

let names = ["Mike", "Mark", "Matt"];
let intiials = names.map(function(element, index) {
    return element[0];
});

console.log(names);
console.log(initials);


// ============= Reduce ==============
// something  mention about reduce, the function callback takes three argunments
// previous, current, and index

let nums = [4,3,6,2];

let answer = nums.reduce(function(prev, curr, index){
    let next = prev + curr;
    console.log("prev =", prev, "current =", curr, "next =", next);
    return next;
});

console.log("the answer is ", answer);







