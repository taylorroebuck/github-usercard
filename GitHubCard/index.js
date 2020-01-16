/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/taylorroebuck')
// .then(response => {
//   console.log(response)
// })
// .catch(error => {
//   console.log('data not found', error)
// });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const entryPoint = document.querySelector(".cards");

axios.get("https://api.github.com/users/taylorroebuck")
.then((response) => {
  friendCard(response);
  console.log(response);

  const newCard = friendCard(response);
  entryPoint.append(newCard);

  // response.data.message.forEach(item => {
  //   const newUser = friendCard(item);
  //   entryPoint.append(newUser);
})

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// create function
function friendCard(object) {
  const card = document.createElement("div"),
        cardImg = document.createElement("img"),
        cardInfo = document.createElement("div"),
          infoName = document.createElement("h3"),
          infoUsername = document.createElement("p"),
          infoLocation = document.createElement("p"),
          infoProfile = document.createElement("p")
            cardAddress = document.createElement("a"),
          infoFollowers = document.createElement("p"),
          infoFollowing = document.createElement("p"),
          infoBio = document.createElement("p");

  // setup the structure of elements
  card.append(cardImg);
  card.append(cardInfo);
    cardInfo.append(infoName);
    cardInfo.append(infoUsername);
    cardInfo.append(infoLocation);
    cardInfo.append(infoProfile);
      infoProfile.append(cardAddress);
    cardInfo.append(infoFollowers);
    cardInfo.append(infoFollowing);
    cardInfo.append(infoBio);

  //add classes to elements
  card.classList.add("card");
  cardImg.classList.add("img");
  cardInfo.classList.add("card-info");
  infoName.classList.add("name");
  infoUsername.classList.add("username");
  infoLocation.classList.add("p");
  infoProfile.classList.add("p");
  infoFollowers.classList.add("p");
  infoFollowing.classList.add("p");
  infoBio.classList.add("p");

  //set text content
  cardImg.src = object.data.avatar_url;
  infoName.textContent = object.data.name;
  infoUsername.textContent = object.data.login;
  infoLocation.textContent = `Location: ${object.data.location}`;
  cardAddress.textContent = object.data.html_url;
  infoFollowers.textContent = object.data.followers;
  infoFollowing.textContent = object.data.following;
  infoBio.textContent = object.data.bio;

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
