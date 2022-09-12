// feature 1, get current weekday and time
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// feature 2 - add a search engine, searched city replaces city name on display after submission
function displayWeatherCondition(reponse) {
  document.querySelector("#city-select").innerHTML = reponse.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    reponse.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = reponse.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    reponse.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    reponse.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "855cb9e221f20919b83b702e5cef27e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  //debugger;
  event.preventDefault();
  // make an API call to OpenWeather API
  // Once get the HTTP response, display the city name and the temperature
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "855cb9e221f20919b83b702e5cef27e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault(); // prevent default behavior
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
//searchForm.addEventListener("keypress", search(event) {if (event.key ==='Enter') {}});

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

// feature 3 bonus - clicking on C or F hyperlinks changes the temperature accordingly
function tempUnitF(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".temperature2");
  currentTemp.innerHTML = `75`;
}
let tempTypeF = document.querySelector("#fahrenheit-link");
tempTypeF.addEventListener("click", tempUnitF);

function tempUnitC(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".temperature2");
  currentTemp.innerHTML = `24`;
}
let tempTypeC = document.querySelector("#celsius-link");
tempTypeC.addEventListener("click", tempUnitC);

/*
// adding API
function displayName(response) {
  console.log(response.data.username);
  let hasdfg = documetn.querySelector();
  afasdf.innerHTML = "";
}



axios.get(apiUrl).then(displayName);

// weather api
let apikey = "855cb9e221f20919b83b702e5cef27e2"; // openweather api key

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apikey}&units=metric`;

function showTemperature(response) {
  console.log(response.data);

  let tempElement = document.querySelector(".temperature2");
  tempElement.innerHTML = response.data.main.temp;
}

axios.get(apiUrl).then(function (showTemperature);
*/
