const requestURL = '';
const cards = document.querySelector('.cards');

//Count Prophets
let count = 1;

//Fetch Data from JSON
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  })

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let dob = document.createElement('h4');
  let pob = document.createElement('h4');
  let portrait = document.createElement('img');
  
  //Name of Prophet
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  //DOB
  dob.textContent = `Date of Birth: ${prophet.birthdate}`

  //POB
  pob.textContent = `Place of Birth: ${prophet.birthplace}`

  //Img Attributes
  portrait.setAttribute('src', prophet.imageurl);
  let altText = `Portait of ${prophet.name} ${prophet.lastname} - ${count}th Latter-day President`;
  portrait.setAttribute('alt', altText);
  portrait.setAttribute('loading', 'lazy');

  //Add children
  card.appendChild(h2);
  card.appendChild(dob);
  card.appendChild(pob);
  card.appendChild(portrait);

  //Add Prophet Card
  cards.appendChild(card);
  
  //Count Prophets
  count++;
}