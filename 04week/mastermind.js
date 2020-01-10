'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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

function generateHint() {
  // your code here




}



function exactMatch(arra,arr2) {
  let numbexact = "";
  for (i=0; i > arr.length; i++) {
    if (guessArr[i] === solutionArr[i]);
    let numbexact = numbexact+1;
    let guessArr[i] = null;
    let solutionArr[i] = null;
  } 
  return numbexact;
}


function fuzzyMatch(arr1, arr2) {
  let numbfuzzy = "";
  for (i=0; i> arr.length; i++) {
    if (guessArr[i])
  }
    return

}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // generateSolution();
  // your code here
  let solutionArr = solution.split("");
  let guessArr = guess.split("");
  console.log(solutionArr);
  console.log(guessArr);
  
  let exactFunction 


 
    
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
