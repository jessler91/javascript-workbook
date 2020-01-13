
// Towers of Hanoi Checkpoint1 Assignment
// Justin Essler - 01/05/19 - AustinCodingAcademy
// need to figure out how to access the value of the final item in an array
// stacks.a[stacks.a.length-1]

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
  // console.log("and so it begins....");
  // console.log(startStack[startStack.length-1]);
}


// ========================================================
// ========= Checkpoint1 Assignment Starts Here ===========
// ========================================================


// ========== Function movePiece =========
function movePiece(startStack, endStack) {
  // move the top piece from startStack to top of endStack
  let movingPiece = stacks[startStack].pop();
  stacks[endStack].push(movingPiece);
  // console.log("moved piece and updated the board");
}


// ========= Function isLegal =========
function isLegal(startStack, endStack) {
  // if the move is legal return true, a legal move is
  // when at least 1 piece resides in the startStack and..
  // when the endStack is empty or...
  // when the top piece in the start stack is smaller than the top piece in the endstack
  // else the move is not legal return false
  let topStartPiece = stacks[startStack][stacks[startStack].length - 1];
  let topEndPiece = stacks[endStack][stacks[endStack].length - 1];
  console.log("top start piece:", topStartPiece);
  console.log("top end piece:", topEndPiece);

  if (stacks[startStack].length > 0 && (topStartPiece < topEndPiece || (topEndPiece === undefined))) {
    console.log ("the move is legal");
    movePiece(startStack, endStack);
    checkForWin();
    return true;
  } else {
    console.log ("the move is not legal");
    return false;
  }
}


// ========== Function checkForWin ============
function checkForWin() {
  // if the player won, return true
  // if the player did not win, return false
  // a win is when all 4 blocks are in stack b or stack c
  if ((stacks.b.length || stacks.c.length) >=4) {
    console.log("Payer Wins");
    return true;
  } else {
    console.log("keep playing, you have not won yet");
    return false;
    }
}


// ========== Function Exectute Towers Game =========
function towersOfHanoi(startStack, endStack) {
  // takes in the userInput for startStack and endStack
  // and digitally plays the round
  isLegal(startStack, endStack); 
  // check to see if the move is legal
  // let startStack = stacks.startStack;
  // let endStack = stack.endStack;
  // moves the piece and prints the boardß

  // check if they won
  // either tell them they won, or do nothing
}



// ========================================================
// ========= Checkpoint1 Assignment Ends Here ===========
// ========================================================


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
