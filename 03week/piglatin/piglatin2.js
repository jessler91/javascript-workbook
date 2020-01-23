let button = document.getElementById("button");
button.addEvenetListener("click", handleClick); {
}

function buttonClicked() {
    console.log("I am inside handeledClick");
    // get the word
    let inputtedSubmission = document.getElementById("userInput");
    let word = userInput.value;
    console.log("word : ", word);
    // translate the word
    let translatedWord = pigLatin(word);
    
    function pigLatin(word) {
        word = word.trim().toLowerCase();
        const vowel = ["a", "e", "i", "o", "u"];
        let firstVowel, firstHalf, secondHalf, switchedWord;
      
        for (var i=0;i<vowel.length;i++){
          var wordIndex = word.indexOf(vowel[i]);
          console.log(wordIndex, firstVowel);
          if (wordIndex > -1 && (wordIndex <= firstVowel || firstVowel == undefined)) {
            firstVowel = wordIndex;
          }
        }
      
        firstHalf = word.substring(0, firstVowel);
        secondHalf = word.substring(firstVowel, word.length);
        switchedWord = secondHalf + firstHalf;
        
        if (firstVowel !== 0) {
          return switchedWord+"ay";  
        } else  {
          return switchedWord+"yay";
        }
      }
    console.log("the translation is...", translatedWord);
    // update the span
    let newWord = document.getElementById("newWord");
    newWord.innerText = translatedWord;
    console.log("I am at the end of handleClick");
}