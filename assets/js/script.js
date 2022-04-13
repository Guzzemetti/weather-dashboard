// open weather API fetch request link and API KeyboardEvent
const apiKey = "d24820a4b09e08d1bb27ae1a68013291";

// Url for geolocation 
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=5&appid=${apiKey}`;

var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=` + citySearch + `&appid=` + `apiKey`;

// Variable to store user input
var citySearch = document.getElementById("citySearch");
var currentDayHeader = document.getElementById("currentHeader");
var currentDayBody = document.getElementById("currentBody");

document.getElementById("searchButton").addEventListener("click", fetchGeo);

// __________________________________________________________________________________

function fetchGeo() {
  var userInputValue = citySearch.value.trim();
  if(userInputValue) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?appid=d24820a4b09e08d1bb27ae1a68013291&q=${userInputValue}&=&=`)
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
      console.log(data);
      oneCall(data)
  })
  console.log(userInputValue);
  console.log(citySearch);
  }
}

function oneCall(data) {
  var latitude = data[0].lat
  var longitude = data[0].lon
  console.log(latitude)
  console.log(longitude);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?appid=d24820a4b09e08d1bb27ae1a68013291&lat=${latitude}&lon=${longitude}&units=imperial`)
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
        console.log(data);
    })
    currentWeather();
  };

function currentWeather(){
  currentDayHeader.textContent = "change";
};













// __________________________________________________________________________________
// Add timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
// __________________________________________________________________________________



// 
// Fetch request for the geolocation API/
// function fetchReq(){
// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=d24820a4b09e08d1bb27ae1a68013291`, {
//   "method": "GET",
//   "headers": {}
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });

// // Fetch request for OneCall
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=50&units=imperial&appid=d24820a4b09e08d1bb27ae1a68013291", {
//   "method": "GET",
//   "headers": {}
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
// };

// fetchReq();




