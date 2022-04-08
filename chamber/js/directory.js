const requestURL = 'https://ea0120.github.io/wdd230/chamber/json/data.json';
const table = document.querySelector('table');
let headrow = document.createElement('tr');
table.appendChild(headrow);
let header = ["Name", "Address", "Website","Directions"];
header.forEach(function(item, index) {
    let tablehead = document.createElement('th');
    tablehead.textContent = item;
    headrow.appendChild(tablehead);
});

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
    let tr = document.createElement('tr');
    let items = [`${businessDirectory.name}`,`${businessDirectory.address}`,`${businessDirectory.website}`,`${businessDirectory.directions}`];
    items.forEach(function(item, index) {
        let td = document.createElement('td');
        td.textContent = item;
        tr.appendChild(td);
    });
    table.appendChild(tr);
}

function changeToList() {
  var divDir = document.getElementById("chamberdir");
  var dirTable = document.getElementById("dirTable");

  if (dirTable != null)
  {
    dirTable.remove();
    
    //Fetch Data from JSON
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        businessDirectory = jsonObject['businessDirectory'];
        divDir.innerHTML += "<ul>";
        businessDirectory.forEach(function(item, index) {
          var tempStr = "<li>";
          tempStr += item.name;
          tempStr += " - ";
          tempStr += item.address;
          tempStr += "</li>";
          divDir.innerHTML += tempStr;
        });
        divDir.innerHTML += "</ul>";
      })
  } else {
    window.location.replace("directory.html");
  }
}