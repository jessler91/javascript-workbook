// Justin Essler - 01/09/2019

// Create a new branch off of master called higherOrderFunctions
// Use the loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
    // Use a do...while loop to console.log the numbers from 1 to 1000.
    // Create an object (an array with keys and values) called person with the following data:
        // firstName: "Jane"
        // lastName: "Doe"
        // birthDate: "Jan 5, 1925"
        // gender: "female"
    // Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
    // Use .forEach() to loop through the arrayOfPersons and console.log() their information.
    // Use .filter() to filter the persons array and console.log only males in the array.
    // Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// ========================= 4.2 Homework =============================
// google this - "loop through the keys of and object in javascript"
// also.........  4.2 HW use forEach() for #5 not .map() --- done JTE

let numb = 0;
do {
  numb += 1;
  console.log(numb);
} while (numb < 1000);



let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


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
        firstName: "Lady",
        lastName: "Frizz",
        birthDate: "Dec 19, 1989",
        gender: "female"
    },
    {
        firstName: "Jane",
        lastName: "Williams",
        birthDate: "Sept 2, 1925",
        gender: "female"
    }
]





