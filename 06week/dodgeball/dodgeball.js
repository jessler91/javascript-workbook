// =========== Checkpoint #2 - Dodgeball =================
// Go back to week 3 videos and see if you can find the pigLatinGui video to watch again
  // what are the w3 schools  addEventListener input syntax parameters?
  // specifically the second line of the two just above

  // two issues still with this code at time of submission...
  
    // 1st
    // when clicking on Commit to Draft, to add interested individual to dodgeball player array, the first time it works, 
    // but then all subsequent times it adds the prior players as a duplicate, then triplicate, and so on...
    // 2nd
    // why is the mascott undefined at the very bottom whne the person parameter is passe down to the final array?
    // if I console log the objects that make up the blueTeam or redTeam, the key value that is mascott has the correct value?

// Would you like to play Dodgeball? // YES
let yes = document.getElementById("yes");
// yes.addEventListener("click", imIn());

function imIn(){
    // console.log("Sounds good, lets get some info");
    let firstResponse = document.getElementById("firstResponseHtml");
    firstResponse.innerText = "cool, please fill out the information fields below";
    return;
}

// Would you like to play Dodgeball? // NO
let no = document.getElementById("no");
// no.addEventListener("click", imOut());

function imOut () {
    // console.log("Not a problem, hope you play next time");
    let firstResponse = document.getElementById("firstResponseHtml");
    firstResponse.innerText = "not a problem, thank you";
    return;
}

// Submit your name to the Draft
// Submit your Skillset
let nameInput = document.getElementById("playerName");
let playerName = nameInput.value;
let skillInput = document.getElementById("playerSkill");
let playerSkill = skillInput.value;
let ageInput = document.getElementById("playerAge");
let playerAge = ageInput.value;

let manualSubmission = {
  id: null,
  name: playerName,
  age: playerAge,
  skillSet: playerSkill,
  placeBorn: null
}



// Button to Signup
let signedUp = document.getElementById("signUp");
// signedUp.addEvenetListener("click", signedUpFunc());

// Console the Input Draft Submission
function signedUpFunc() {
  console.log(playerName, playerSkill);
  arrOfPeople.unshift(manualSubmission);

  // let manualperson = document.getElementById('people');
  // let manual = document.createElement("li");
  // manual.appendChild(document.createTextNode(person.name + " - " + person.skillSet+"  "));
  // manualperson.appendChild(manual);
  
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
  
  // Classes and Constructors

  class DodgeBallPlayer {
    constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = person.id;
      this.name = person.name;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
      this.age = person.age;
    }
  }
  
  // class Drafted extends DodgeBallPlayer {
  //   constructor (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascott){
  //     super (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) 
  //     this.teamColor = teamColor;
  //     this.mascott = mascott;
  //   }
  // }

  class BlueTeammate extends DodgeBallPlayer {
    constructor (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascott) {
      super (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) 
      this.teamColor = "blue";
      this.mascott = "Blues";
    }
  }

  class RedTeammate extends DodgeBallPlayer {
    constructor (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascott){
      super (person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) 
      this.teamColor = "red";
      this.mascott = "Reds";
    }
  }
  



  // List the People that can be turned into players
  // should list the person name and skill set
  // along with a button with function to make a dodge ball player

  function listPeopleChoices() {


    arrOfPeople.map(person => {
      // Grab the people id that should display the lsit of people 
      let listElement = document.getElementById('people');

      // display the name and skill
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet+"  "));

      // create and append a "make player" button
      let makePlayer = document.createElement("button");
      makePlayer.innerHTML = "Commit to Draft";
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

      dodgeBallPlayer.push(new DodgeBallPlayer(person));
      let playerElement = document.getElementById('players');
      
// Comment from Yousif...
// you dont need to do this work on every person in the list of dodgeBallPlayers, just the person you just created.

      // dodgeBallPlayer.map(person => {
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
      // })
  }



  // Draft Player, Assign to a blue or red team
  // A function that uses the DodgeBallPlayers to push player the blue team or red team entession constructors
  // should add the class New Drafted

  let redTeam = [];

  let makeRedPlayer = (person) => {
    // console.log(`li ${person} was clicked!`);
    redTeam.push(new RedTeammate(person));
    // console.log(redTeam);
    let redPlayerElement = document.getElementById('red');
    let redPlayerLine = document.createElement("li");
    redPlayerLine.appendChild(document.createTextNode(person.name+ ", " + person.age + "y/o, " + person.mascott));
    redPlayerElement.appendChild(redPlayerLine);
  }


  let blueTeam = [];

  let makeBluePlayer = (person) => {
    // console.log(`li ${person} was clicked!`);
    blueTeam.push(new BlueTeammate(person));
    // console.log(blueTeam);
    let bluePlayerElement = document.getElementById('blue');
    let bluePlayerLine = document.createElement("li");
    bluePlayerLine.appendChild(document.createTextNode(person.name+ ", " + person.age + "y/o, " + person.mascott));
    bluePlayerElement.appendChild(bluePlayerLine);

  }



