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


let arrayOfContacts;


window.onload = function() {
    getContacts()
}

const consoleContacts = () => {
    console.log(arrayOfContacts)
  }

const getContacts = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(contacts => arrayOfContacts = contacts)
}


const displayContacts = () => {
    const allContacts = document.getElementById('contacts')
    console.log(arrayOfContacts)
    arrayOfContacts.map((contact, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Title: ${contact.title}:  ${contact.body}, by user: ${contact.userId}`)
      li.appendChild(text)
      allContacts.append(li)
    })
  }
  