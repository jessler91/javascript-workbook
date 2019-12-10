console.log("Starting Assigment 1");
// Justin Essler Day #1

// Write a JavaScript program to display the current day and time.complete
let currentDate = new Date();
console.log("The current date and time is", currentDate);

// Write a JavaScript program to convert a number to a string. complete
var num = 15;
var n = num.toString();
console.log("The number is ", num);
console.log("The string representing the number is ", n);

// Write a JavaScript program to convert a string to the number.Complete
var name = "John Doe";
var age = 12;
var isMale = true;
console.log("The name variable of John Doe is a", typeof name);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean, complete
var x = 7;
var y = 10;
var z = x + y;
console.log(z);
console.log(
  "The sum of these datatypes (17) is Boolean,",
  Boolean(z),
  "Good Work"
);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Null..... for some reason it is repurning object....
var num4 = null;
console.log("The name variable of 'num4' is", typeof num4);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Undefined, complete
var d;
console.log("the variable d is", typeof d);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Number, complete
var number7 = 15;
console.log(number7, "is a", typeof number7);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// NaN, I dont get this one, I copied and paseted to get to the NaN answer
// x = ('text' + 10);
// console.log(x);
// console.log(typeof x);
console.log('Appdividend' - 30)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// String, complete
console.log("The name John Doe from above is a", typeof name);

// Write a JavaScript program that adds 2 numbers toether. 
// Complete
var f = 17;
var d = 26;
var sumfd = f + d;
console.log(sumfd);

// Write a JavaScript program that runs only when 2 things are true.
// This one isnt working, I cannot seem to figure out how to make the boolean return "true"
console.log("BoyAge");
var boy1age = 8;
var boy2age = 7;
const myAgeFunc = (boy1age, boy2age) => {
  if (boy1age < boy2age && boy1age + boy2age >= 10) {
    console.log("Both boy statements are true");
    function boyProgram() {}
  } else {
    console.log("Both boy statements are not true, so the program is false");
  }
};
myAgeFunc();

// Write a JavaScript program that runs when 1 of 2 things are true.
// This one isnt working// This one isnt working, likewise I cannot seem to figure out how to make the boolean return "true"
console.log("GirlAge");
var girlAge1 = 15;
var girlAge2 = 10;

const girlAgeFunc = (girlAge1, girlAge2) => {
  if (girlAge1 > girlAge2 && girlAge1 + girlAge2 > 10) {
    console.log("Both girl statements are true");
  } else {
    console.log("Both girl statements are not true, so the program is false");
    function girlProgram() {
      console.log("Run girlProgram Function");
    }
  }
};
girlAgeFunc();

// Write a JavaScript program that runs when both things are not true.
// this should work but I am not confident that it is
var x = false;
var y = true;
function notTrue(){
    if (x === false && y === false) {
        runProgram();
    }
    else {
        console.log("Game Over");
    }
}