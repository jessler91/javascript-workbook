// =========== Checkpoint #2 - Dodgeball =================
// Go back to week 3 videos and see if you can find the pigLatinGui video to watch again
  // what are the w3 schools  addEventListener input syntax parameters?
  // specifically the second line of the two just above




// Would you like to play Dodgeball? // YES
let yes = document.getElementById("yes");
yes.addEventListener("click", imIn());

function imIn(){
    // console.log("Sounds good, lets get some info");
    let firstResponse = document.getElementById("firstResponseHtml");
    firstResponse.innerText = "cool, lets fill out some info";
    return;
}

// Would you like to play Dodgeball? // NO
let no = document.getElementById("no");
no.addEventListener("click", imOut());

function imOut () {
    // console.log("Not a problem, hope you play next time");
    let firstResponse = document.getElementById("firstResponseHtml");
    firstResponse.innerText = "not a problem, thank you";
    return;
}

// Submit your Name to the Draft
// Submit your skillset
let nameInput = document.getElementById("playerName");
let playerName = nameInput.value;

let skillInput = document.getElementById("playerSkill");
let playerSkill = skillInput.value;

// Button to Signup
// let signedUp = document.getElementById("signUp");
// signedUp.addEvenetListener("click", signedUp());

// Console the Imput Draft Submission
function signedUp() {
  console.log(playerName, playerSkill)
}


// Sample Array of people
let arrOfPeople = [
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
    {
      id: 9,
      name: "Bobby Cole",
      age: 35,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
    {
      id: 10,
      name: "Jim Cole",
      age: 36,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  

  class DodgeBallPlayer {
    constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = person.id;
      this.name = person.name;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
    }

    
  
  }
  

  class Drafted extends DodgeBallPlayer {
    constructor (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascott){
      super (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) 
      this.teamColor = teamColor;
      this.mascott = mascott;
    }

  }
  

  // class blueTeammate {
  //   constructor(){}
  // }

  // class redTeammate {
  //   constructor(){}
  // }
  



  // List the People that can be turned into players
  // should list the person name and skill set
  // along with a button with function to make a dodge ball player

  function listPeopleChoices() {
    let listElement = document.getElementById('people');

    arrOfPeople.map(person => {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet+"  "));

        let makePlayer = document.createElement("button");
        makePlayer.innerHTML = "Make Player";
        makePlayer.addEventListener('click', function() {interestedPlayer(person)} );
        li.appendChild(makePlayer);
      
      // Append the entire line, name, skill, red button, blue button
      listElement.appendChild(li);
    })
  }




  // List Dodge Ball Players
  // should list the person name 
  // along with two buttons with function to make a red team or blue team
  // uses the person.id to push player the dodge ball payers list
  // should add the class New DodgeBallPlayer to arrOfPeople


  let dodgeBallPlayer = [];

  function interestedPlayer(person) {

      dodgeBallPlayer.push(new DodgeBallPlayer(person, true, true, true, true, true));
      let playerElement = document.getElementById('players');
      
      dodgeBallPlayer.map(person => {
        let playerli = document.createElement("li");
        playerli.appendChild(document.createTextNode(person.name +"  "));
  
        // Add to Red Team Button
        let buttonRed = document.createElement("button");
        buttonRed.innerHTML = "Red Team";
        buttonRed.addEventListener('click', function() {makeRedPlayer(person)} );
        playerli.appendChild(buttonRed);
  
        // Add to blue team button
        let buttonBlue = document.createElement("button");
        buttonBlue.innerHTML = "Blue Team";
        buttonBlue.addEventListener('click', function() {makeBluePlayer(person)} );
        playerli.appendChild(buttonBlue);
 
        // Append the entire line, name, skill, red button, blue button
        playerElement.appendChild(playerli);
      })
  }



  // Draft Player, Assign to a blue or red team
  // A function that uses the DodgeBallPlayers to push player the blue team or red team entession constructors
  // should add the class New Drafted

  let blueTeam = [];
  let redTeam = [];

  let makeRedPlayer = (person) => {
    console.log(`li ${id} was clicked!`)
    redTeam.push(new DodgeBallPlayer(person, true, true, true, true, true));
    console.log(redTeam)
  }


  let makeBluePlayer = (person) => {
    console.log(`li ${id} was clicked!`)
    blue.push(new DodgeBallPlayer(person, true, true, true, true, true));
    console.log(blueTeam)
  }















// To use to assign class to...

// Ships and CrewMembers //
// let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
// let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
// let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
// let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');





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