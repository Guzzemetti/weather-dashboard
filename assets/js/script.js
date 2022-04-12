// open weather API fetch request link and API KeyboardEvent
const apiKey = "d24820a4b09e08d1bb27ae1a68013291";

// Url for geolocation 
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=5&appid=${apiKey}`;



var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey`;

// Variable to store user input
var citySearch = document.getElementById("citySearch");


// TD Make variables for DOM Elements


// Add timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


// Fetch request for the geolocation API/
function fetchReq(){
fetch("http://api.openweathermap.org/geo/1.0/direct?q=Orlando&appid=d24820a4b09e08d1bb27ae1a68013291", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

// Fetch request for OneCall
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=50&units=imperial&appid=d24820a4b09e08d1bb27ae1a68013291", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
};

fetchReq();