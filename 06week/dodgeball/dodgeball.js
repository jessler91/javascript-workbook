// =========== Checkpoint #2 - Dodgeball =================
// Go back to week 3 videos and see if you can find the pigLatinGui video to watch again


function imIn(){
    console.log("Sounds good, You are added to the list");
    let firstResponse = document.getElementById("firstResponseHtml");
    firstResponse.innerText = "cool, lets fill out some info";
    return;
}

let yes = document.getElementById("yes");
yes.addEvenetListener("click", imIn());



let no = document.getElementById("no");
no.addEvenetListener("click", imOut());
// what are the w3 schools  addEventListener input syntax parameters?
// specifically the second line of the two just above

function imOut () {
    console.log("Not a problem, hope you play next time");
    let firstResponse = document.getElementById("firstResponseHtml");
    firstResponse.innerText = "not a problem, thank you";
    return;
}


let nameInput = document.getElementById("playerName");
let playerName = nameInput.value;

let skillInput = document.getElementById("playerSkill");
let playerSkill = skillInput.value;

class dodgeBallPlayer {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){

    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }



}



// arrOPlayers.push(new dodgeBallPlayer(arr[i], true, true, true))



const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  

  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
  }

















// ============ Pig Latin #2 JS Code ================

// let button = document.getElementById("button");
// button.addEvenetListener("click", handleClick); {
// }

// function buttonClicked() {
//     console.log("I am inside handeledClick");
//     // get the word
//     let inputtedSubmission = document.getElementById("userInput");
//     let word = userInput.value;
//     console.log("word : ", word);
//     // translate the word
//     let translatedWord = pigLatin(word);
    
//     function pigLatin(word) {
//         word = word.trim().toLowerCase();
//         const vowel = ["a", "e", "i", "o", "u"];
//         let firstVowel, firstHalf, secondHalf, switchedWord;
      
//         for (var i=0;i<vowel.length;i++){
//           var wordIndex = word.indexOf(vowel[i]);
//           console.log(wordIndex, firstVowel);
//           if (wordIndex > -1 && (wordIndex <= firstVowel || firstVowel == undefined)) {
//             firstVowel = wordIndex;
//           }
//         }
      
//         firstHalf = word.substring(0, firstVowel);
//         secondHalf = word.substring(firstVowel, word.length);
//         switchedWord = secondHalf + firstHalf;
        
//         if (firstVowel !== 0) {
//           return switchedWord+"ay";  
//         } else  {
//           return switchedWord+"yay";
//         }
//       }
//     console.log("the translation is...", translatedWord);
//     // update the span
//     let newWord = document.getElementById("newWord");
//     newWord.innerText = translatedWord;
//     console.log("I am at the end of handleClick");
// }