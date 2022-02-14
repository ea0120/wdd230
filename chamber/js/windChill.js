var temperature = 33;
var windSpeed = 3;

const windChillFahrenheit = 
  35.74 +
  0.6215 * temperature -
  35.75 * windSpeed ** 0.16 +
  0.4275 * temperature * windSpeed ** 0.16;

console.log(windChillFahrenheit)

var windChillText = document.getElementById("windchill");

console.log(windChillText)

windChillText.innerHtml = "Wind Chill:&emsp;&emsp;&emsp;&emsp; " + windChillFahrenheit;
