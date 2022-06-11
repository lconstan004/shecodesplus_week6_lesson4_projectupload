//WEEK 4 Feature 1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let timeUpdate = document.querySelector("li#date");
timeUpdate.innerHTML = `${day} ${hour}:${minutes}`;

//WEEK 4 Feature 2 and WEEK 5

function search(event) {
  event.preventDefault();
  let search = document.querySelector("#searchinputtext");
  let city = search.value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let searchEntry = document.querySelector("#searchinputtext");
  let cityTitle = document.querySelector("#city");
  cityTitle.innerHTML = searchEntry.value;
  let cityTemp = document.querySelector("#temp");
  cityTemp.innerHTML = Math.round(response.data.main.temp) + "C";
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

//Bonus feature - Celsius Conversion
//Celsius link to be added later (Week 5):
//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureCElement = document.querySelector("#temperature");
//temperatureCElement.innerHTML = "20 ";}
//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);

//Bonus feature - Fahrenheit Conversion
//Fahrenheit link to be added later (Week 5):
//function convertToFahrenheit(event) {
//  event.preventDefault();
//let temperatureFElement = document.querySelector("#temperature");
//temperatureFElement.innerHTML = "68 ";}

//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//WEEK5 Bonus Point

function showCurrentWeather(response) {
  let temperature = document.querySelector("#temperature");
  let result = Math.round(response.data.main.temp);
  let location = response.data.name;
  temperature.innerHTML = `${result}°C in ${location}`;
}

function retrievePosition(position) {
  console.log(position);
  let apiKey = "d9aff5d52851026a180b9297880bedd8";
  let lat = position.coords.latitude;
  console.log(lat);
  let lon = position.coords.longitude;
  console.log(lon);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showCurrentWeather);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let geolocation = document.querySelector("#currentlocationbutton");
geolocation.addEventListener("click", getCurrentLocation);
