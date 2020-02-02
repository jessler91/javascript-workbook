// ACA Class Week#7 - APIs
// Branch: "fetch"

// create a new repo in your gitHub called " FetchPractice-1"
// clone it into your devFolder
// inside the new repo create two files: index.html and main.js
// copy/paste the code below into the respective files.
// While working throughout this fetch practice make sure you reference and read in it's entirety the MDN Docs on fetch()
// Use the documents at jsonplaceholder to:
    // For each of the buttons listed in the index.html file:
        // create a function that fetches the data the button should fetch
        // push the response into an array
        // and displays them as an li in a ul
// Use the docs on jsonplaceholder to post a new post to the database.
// Use the docs to put (edit) a post.
// Get this all finished before coming into class.
// If you don't you will be very unprepared


// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it.
// This way you can learn how to build fetch requests and work with other apis and become a real developer!!


let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). 
// Then it will turn the response (data it's getting back), saved here as res. 
// The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}



// Display All Posts
// this function creates elements inside the all-posts ul, 
// then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}





// List of all Posts by UserID #5
// this function should log all postts bu userID #5
const fetch5Posts = () => {
  const fivePosts = document.getElementById('five')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}




// List of all Comments
// this function should return all post comments

let arrayOfComments;

const getComments = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(comments => arrayOfComments = comments)
}

const displayComments = () => {
  const allComments = document.getElementById('comments')
  arrayOfComments.map((comment, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${comment.title}:  ${comment.body}, by user: ${comment.userId}`)
    li.appendChild(text)
    allComments.append(li)
  })
}


// this function should return a list of alll users














// Examples of Fetch from Mozilla Documentation and JSONplaceholder

// fetch('http://example.com/movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
