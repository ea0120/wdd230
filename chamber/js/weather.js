function showData(jData) {
    //Get Weather Icon
    wIcon = "http://openweathermap.org/img/wn/" + jData.weather[0].icon + ".png"

    //Load Weather Icon to Page
    var img = document.createElement('IMG');
    img.setAttribute("src", wIcon);
    img.setAttribute("alt", "Current Weather");
    document.body.appendChild(img);

    //Show Current Temperature
    var tmp = document.createElement('p');
    //Convert from Kelvin to Celsius
    var cTemp = jData.main.temp - 273.15;
    tmp.textContent = cTemp.toFixed(2) + "\u00B0C";
    document.body.appendChild(tmp);

    //Main Weather Condition
    var mWea = document.createElement('p');
    mWea.textContent = jData.weather[0].main;
    document.body.appendChild(mWea);

    //Add wind speed
    var windS = document.createElement('p');
    //Convert m/s to km/h
    var kmh = jData.wind.speed * 3.6;
    windS.textContent = "Wind Speed: " + kmh.toFixed(2) + " km/h";
    document.body.appendChild(windS);

    //Add Wind Chill
    var wChilC = document.createElement('p');
    var windChilCel = 13.12 + (.6215 * cTemp) - (11.37 * kmh * 0.16) + (.3965 * cTemp * kmh * 0.16);
    wChilC.textContent = "Wind Chill: " + windChilCel.toFixed(2);
    document.body.appendChild(wChilC);
}

//Code Entry Point
fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=ceff90d8e8582ab663ac5955eaebccaf')
fetch("weather.json")
.then(res => res.json())
.then(data => showData(data))