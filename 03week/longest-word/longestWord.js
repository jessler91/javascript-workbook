
function handleClick() {
    //get sentence from page
    let textAreaElement = document.getElementById("userInput");
    let mySentence = textAreaElement.value;
    console.log("got the sentence from the page", mySentence);
    //find the longest word
    let theWord = findLongestWord(mySentence);
    // display the longest word to the page
    let resultElement = document.getElementById("results");
    resultElement.innerText = theWord;
}

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  console.log(words);
  let longestWord = words[0];
  console.log(longestWord);
  console.log(longestWord.length);
  for (i=0;i<words.length;i++) {
    let currentWord = words[i];
    if (longestWord.length < currentWord.length) {
      longestWord = currentWord;
  }
}
return longestWord;
}

// let x = findLongestWord(sentence);
//  console.log(x);