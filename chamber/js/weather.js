function showData(jData) {
    //console.log(jData);

    //Get Weather Icon
    wIcon = "http://openweathermap.org/img/wn/" + jData.weather[0].icon + ".png";

    //Div to hold weather data
    var wContainer = document.getElementById('wContainer');
    var divSpace = document.createElement('div');
    wContainer.appendChild(divSpace);
 
    //Load Weather Icon to Page
    var divImg = document.createElement('div');
    wContainer.appendChild(divImg);
    var img = document.createElement('img');
    img.setAttribute("src", wIcon);
    img.setAttribute("alt", "Current Weather");
    divImg.appendChild(img);

    //Show Current Temperature
    var divTemp = document.createElement('div');
    wContainer.appendChild(divTemp);
    var tmp = document.createElement('p');
    //Convert from Kelvin to Celsius
    var cTemp = jData.main.temp - 273.15;
    tmp.textContent = cTemp.toFixed(2) + "\u00B0C";
    divTemp.appendChild(tmp);

    //Main Weather Condition
    var txtStatus = document.getElementById('status');
    txtStatus.innerHTML = jData.weather[0].main;

    //Add wind speed
    var txtSpeed = document.getElementById('windSpeed');
    //Convert m/s to km/h
    var kmh = jData.wind.speed * 3.6;
    txtSpeed.innerHTML = "Wind Speed:&emsp;&emsp;&emsp;&emsp;" + kmh.toFixed(2) + " km/h";

    //Add Wind Chill
    var txtChill = document.getElementById('windchill');
    //Calulate Wind Chill
    var windChilCel = 13.12 + (.6215 * cTemp) - (11.37 * kmh * 0.16) + (.3965 * cTemp * kmh * 0.16);
    txtChill.innerHTML = "Wind Chill:&emsp;&emsp;&emsp;&emsp;" + windChilCel.toFixed(2);
}

//Code Entry Point
fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=ceff90d8e8582ab663ac5955eaebccaf')
//fetch("/chamber/json/weather.json")
.then(res => res.json())
.then(data => showData(data))