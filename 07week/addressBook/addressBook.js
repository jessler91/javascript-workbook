// Justin Essler - Austin Coding Academy
// Address Book Assignment

// Read these instructions and understand the requirements FIRST.
// Whiteboard your app - Make a code plan - Psuedo code and then translate to Javascript
// Create a new repo (name it descriptively well) and clone it to your local machine and share it with your partner
// Open the directory and create an index.html and main.js file to fetch a user and display them one at at time.
// Use the api: https://randomuser.me/api/ to fetch a user now.
// Fetch a new user multiple times and store them in an array.
// Then list out all the users in your address book array by name and picture.
// Figure out how to fetch multiple users in one fetch requests
// Fetch multiple users on window load.
// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth.
// Once you have the functionality working, feel free to style and structure your address book with CSS and HTML
// YOU KNOW HOW TO DO ALL OF THIS BY NOW. TRUST YOURSELF!!

// https://randomuser.me/api/



window.onload = function() {
  console.log("inside window onload")
  getContacts();
}

function getContacts() {
  console.log("about to call API");
  fetch('https://randomuser.me/api/?results=10')
  
    .then(function(response) {
      return response.json();
    })

    .then(function(myjson) {
      console.log("processing json payload", myjson);
      displayContacts(myjson.results);
    })
}


function displayContacts(userlist) {

    userlist.forEach(function(user) {
      console.log("processing single user");
      let ul = document.getElementById('contacts')
      let li = document.createElement('li')
      li.innerText = user.name.first+" "+user.name.last+" ";
      ul.appendChild(li);

      let myButton = document.createElement("button");
      myButton.innerText = "More Contact Details"
      myButton.addEventListener("click", 

        function showDetials(){
          console.log("inside the more details button");
          // let ul = document.getElementById('contacts')
          let liTwo = document.createElement('li')
          liTwo.innerText = user.name.first+" "+user.name.last;
          liTwo.appendChild(ul);

        })

      li.appendChild(myButton);

    })
  }
