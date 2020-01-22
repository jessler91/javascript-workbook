// ==============================
// Notes for Mastermind project
// Justin Essler
// 01/07/2020
// ==============================

// function exactMatches(array1, array2){
//   return numExact;
// }

// function fuzzyMatches(array1, array2) {
//   return numbFuzzy;
// }

// let s1 = "abcd";
// let guess = "bbbb";

// console.log(exactMatches(s1, guess));
// console.log(fuzzyMatches(s1, guess));


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let letters = ['a', 'b', 'c', 'd'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// ========================================================
// ========= Mastermind Assignment Starts Here ===========
// ========================================================

// generateSolution();
// where do I call this function ????

function generateHint(guess) {
  let solutionArr = solution.split("");
  let guessArr = guess.split("");
  let numbexact = 0;
  let numbfuzzy = 0;

  // exactMatch
  for (let i = 0; i < solutionArr.length; i++) {
    if (solutionArr[i] === guessArr[i]) {
      numbexact++;
      solutionArr[i] = null;
    }
  }

  // fuzzyMatch
  for (let i=0; i < solutionArr.length; i++) {
    let correctletter = guessArr.indexOf(solutionArr[i]); 
    // did I do this correctly above?
    if (correctletter > -1) {
      numbfuzzy++;
      solutionArr[i] = null;
    }
  }

  return `${numbexact}-${numbfuzzy}`;

}

function mastermind(guess) {
  // solution = 'abcd'; 
  //generateSolution();
  console.log(solution);

  // Comment this out to generate a random solution
  // your code here

  if (guess === solution) {
    board = [];
    console.log("You guessed it!");
    return;
  } else {
    let hint = generateHint(guess);
    board.push (`MyGuess #${board.length+1}: ${guess} MyHint #${board.length+1}: ${hint}`);
    if (board.length - 1 === 10) {
      board = [];
      return "You ran out of turns, game is over: " + soultion;
    } else {
      return "Guess Again";
    }
  }

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}




  // Indepently scripted functions
  
  // function exactMatch(guessArr,solutionArr) {
  //   for (let i =0; i < guessArr.length; i++) {
  //     if (guessArr[i] === solutionArr[i]) {
  //       let numbexact = numbexact+1;
  //       guessArr[i] = null;
  //     }
  //   }
  //   return numbexact;
  // }

  // function fuzzyMatch(guessArr, solutionArr) {
  //   for (let i=0; i < guessArr.length; i++) {
  //     let correctletter = guessArr.indexOf(solutionArr[i]); 
  //     if (correctletter > -1) {
  //       numbfuzzy++;
  //     }
  //   }
  //     return numbfuzzy;
  // }

  // More Notes moving from working area

  // this variable is getting moved to the mastermind function()
    // let hint = console.log(numbexact,"-",numbfuzzy);
    // let hint = "numbexact-numbfuzzy";
    // let hint = the return of generateHint(guess);
    // the last one is going to be correct

  // Spec 3 - Add guess and hint to the board 
  //  - define a var called hint that collects the returned value of generateHint(guess). 
  //  - .push the guess and the hint (as a combined string) into the board.
  // Spec 4 - End the game After 10 incorrect guesses, 
  //  - if the board length equals 10, 
  //  - return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'.