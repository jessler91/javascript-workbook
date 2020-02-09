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




// Dodgeball Assignment







// Justin Essler - Week #6 Day #2 Notes


// Bubble Sort Warmup Exaple

// Option #1 
// do ... while
// with a for and if


myBubbles = [3, 7, 1, 5, 2]


function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// Option #2
// For loop inside of another for loop


function swap(arr, first_Index, second_Index){
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

function bubble_Sort(arr){

  var len = arr.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=0, stop=len-i; j < stop; j++){
          if (arr[j] > arr[j+1]){
              swap(arr, j, j+1);
          }
      }
  }

  return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));


// Option #3 - is a recorded video on  01/23/19


let someArray = [3, 7, 1, 5, 2]

function bubbleSort(arr) {
  let len = arr.length;
  for(let i=0; i<len-1; i++) {
    

    if (arr[i]>arr[i+1]) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;

    }
    }


}

