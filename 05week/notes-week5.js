

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

// your code here



// ==================== Notes ==================
// =============== Week # 5 Day # 2 ==================
// WarmUp




