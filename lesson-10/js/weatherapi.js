const apiURL = "https://ea0120.github.io/wdd230/lesson-10/weatherData.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;