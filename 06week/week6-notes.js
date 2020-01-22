// Justin Essler Notes Week #6

// Notes to add to the MarsMission Assignment 
class CrewMember {
    constructor(name, job, specialSkill) {
      this.name = name;
      this.job = job;
      this.specialSkill = specialSkill;
    }
    
    enterShip(ship){
      // this needs work //
      // let crewAssignment = 
      // this.CrewMember.push()
      this.ship = ship;
      ship.crew.push(this); 
      return 
    }
}

// within the class ship 
// add this.crew = []; 
// to the class that is the crewMember 


// Week 6 Notes Day # 1

// Warmup 
// I marginally performed this well on the whiteboard
// did not catch the i--; and  len--;

function zeros (arr) {
    let len = arr.length;
    for (let i = 0; i<len; i++)
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
            i--;
            len--;
        }
}





// when you are modifying the original array with a for loop
// you will always have an issue with the lenght of the loop
// i--;
// len--;




// Dodgeball

