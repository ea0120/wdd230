const requestURL = 'https://ea0120.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

//Count Prophets
let count = 1;


//Fetch Data from JSON
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    businessDirectory = jsonObject['businessDirectory'];
    businessDirectory.forEach(displayBusiness);
  })

function displayBusiness(businessDirectory) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let adr = document.createElement('h4');
  let web = document.createElement('h4');
  let newRow = document.createElement('table')
  
  //Name of business
  h2.textContent = `${businessDirectory.name}`;

  //DOB
  adr.textContent = `Address: ${businessDirectory.address}`

  //POB
  web.textContent = `Website: ${businessDirectory.website}`

  //newRow
  newRow.textContent = `${businessDirectory}`

  //Add children
  card.appendChild(h2);
  card.appendChild(adr);
  card.appendChild(web);

  //Add Prophet Card
  cards.appendChild(card);
  
  //Count Prophets
  count++;
}