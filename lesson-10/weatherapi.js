const apiURL = "https://ea0120.github.io/wdd230/lesson-10/weatherData.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });