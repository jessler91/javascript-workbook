// =========== JustinEssler =========== //
// ============= marsMission ========== //
// ============== 01/18/20 ============ //

'use strict';
let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// create a class represents a crew member //
  // crew member should have a name, job, specialSkill
  // you should have a method called enterShip()
  // this method should take in ship as input
  // this method should update the crew list of the ship

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
    let ship.crew.push(); 

    return 
  }

}

// class represents a ship //
  // ship constructor has a name, type, ability, and..
  // ship constructor should set an array called crew to be any empty array
  // ship should have a method called missionStatement() // to return the ship.ability
  // missionStatement() should return "Can't perform mission yet" if it has no crew
  // missionStatement() should return the ship's ability if there is at least 1 crew member

class Ship {
  constructor(name, type, ability, crew = []) {
    this.name = name;
    this.type = type;
    this.ability = ability;
  }

  missionStatement(){
    // this needs work too //
    if (this.crew.length <= 0 || this.crew.length == undefined) {
      return "Can't perform mission yet"
    } else {
      return Ship.ability;
    }
  }

}




// Ships and CrewMembers //
let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

// Create New crewMembers and Assign Ship //
crewMember1.enterShip(mav);
crewMember2.enterShip(hermes);

// Call Ship missionStatements //
mav.missionStatement();
hermes.missionStatement();





// tests //
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
