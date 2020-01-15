'use strict'
console.log("loding js script")

let button2 = document.getElementById("button2");
button2.addEvenetListener("click", handleClick()); {
    
}


// let element = document.getElementById("translatedWord");
// element.addEventListener("mouseover", function(){
//     console.log("th word is hovered over");
// })


// let inputElement = document.getElementById("word");
// imputElement.addEventListener("keyup", function(){
//     let value = document.getElementById("word").value;
//     console.log(value.length);
//     let span = document.getElementById("wordlength");
//     span.innerText = value.length;

//     })


function handleClick() {
    console.log("I am inside handeledClick");
    // get the word
    let inputElement = document.getElementById("word");
    let word = inputElement.value;
    console.log("word : ", word);
    // translate the word
    let translation = pigLatin(word);
    function pigLatin(word) {
      
        word = word.trim().toLowerCase();
        const vowel = ["a", "e", "i", "o", "u"];
        let firstVowel, firstHalf, secondHalf, switchedWord;
      
        for (var i=0;i<vowel.length;i++){
          var wordIndex = word.indexOf(vowel[i]);
        //   console.log(wordIndex, firstVowel);
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

    console.log("the translation is ...", translation);


    // update the span
    let translatedWord = document.getElementById("translatedWord");
    translatedWord.innerText = translation;
    console.log("I am at the end of handleClick");

}