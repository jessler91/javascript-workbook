// Justin Essler - 01/09/2019
// new branch: higherOrderFunctions


// ====================== 4.2 Homework ========================
// Complete each of the following exercises.
// google this - "loop through the keys of and object in javascript"
// Use a do...while loop to console.log the numbers from 1 to 1000.

let numb = 0;
do {
  numb += 1;
  console.log(numb);
} while (numb < 1000);

// Create an object called person
    // firstName: "Jane"
    // lastName: "Doe"
    // birthDate: "Jan 5, 1925"
    // gender: "female"

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// ====================== 4.2 Homework ========================
// Use a for...in loop and if statement to...
    // console.log the value associated with the key birthDate if the birth year is an odd number.

console.log("======== for...in ==========");

// have a question about this one, 

for (var property in person) {
    let birthDateArr = person.birthDate.split(" ");
    let birthYear = birthDateArr[2];
    if (birthYear % 2 !== 0) {
        console.log(person.birthDate);
    }
}

// ====================== 4.2 Homework ========================
// Create an arrayOfPersons that contains mulitiple objects.

let arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1975",
        gender: "female"
    },
    {
        firstName: "Martin",
        lastName: "Doug",
        birthDate: "Jan 5, 1965",
        gender: "male"
    },
    {
        firstName: "Margret",
        lastName: "Wilma",
        birthDate: "Mar 17, 1964",
        gender: "female"
    },
    {
        firstName: "Jane",
        lastName: "Williams",
        birthDate: "Sept 2, 1995",
        gender: "female"
    }
]

// ====================== 4.2 Homework ========================
// Use .forEach() to loop through the arrayOfPersons and console.log() their information.

console.log("======== .forEach() ==========");
arrayOfPersons.forEach(function(index){
    return console.log(index);
});



// ====================== 4.2 Homework ========================
// Use .filter() to filter the persons array and console.log only males in the array.

console.log("======== .filter(males) ==========");
let variable = arrayOfPersons.filter(function(person){
    return person.gender === "male";
});

console.log(variable);


// ====================== 4.2 Homework ========================
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

console.log("======== .filter(born before Jan 1, 1990) ==========");
let oldFolks = arrayOfPersons.filter(function(element){
    let dateArray = element.birthDate.split(" ");
    if (dateArray[2] < 1990 ) {
        return element;
    }
});

console.log(oldFolks);
