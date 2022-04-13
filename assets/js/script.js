// open weather API fetch request link and API KeyboardEvent
const apiKey = "d24820a4b09e08d1bb27ae1a68013291";
// Url for geolocation 
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=5&appid=${apiKey}`;
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=` + citySearch + `&appid=` + `apiKey`;
// __________________________________________________________________________________
// Variable to store user input
var citySearch = document.getElementById("citySearch");
var currentDayHeader = document.getElementById("currentHeader");
var currentDayCard = document.getElementById("currentCard");
var cardTitle = document.querySelector(".card-title");
var tempOne = document.getElementById("tempOne");
var windOne = document.getElementById("windOne");
var humidityOne = document.getElementById("humidityOne");
var uvIndex = document.getElementById("uvIndex");

// Triggers api request and subsequent functions when the search button is pressed
document.getElementById("searchButton").addEventListener("click", fetchGeo);
// _____________________________________________________________

// Fetches location data for the submitted city
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
  // console.log(userInputValue);
  // console.log(citySearch);
  }
}
// __________________________________________________________________________________
// Fetches current weather for the submitted city
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
        currentWeather(data);
    })
  };
// __________________________________________________________________________________

// Displays current day's weather for the submitted city on the main card
function currentWeather(data){
  var temp = data.current.temp;
  var wind = data.current.wind_speed;
  var humidity = data.current.humidity;
  var uvIn = data.current.uvi;
  // console.log(uvIn);
  var currentDt = data.current.dt;
  var milliseconds = currentDt * 1000;
  var fullDate = new Date(milliseconds);
  var currentDate = fullDate.toLocaleDateString();

  // Displays current data in the main card
  cardTitle.textContent = citySearch.value.trim();
  currentDayHeader.innerHTML = currentDate;
  tempOne.innerHTML = "Temperature: " + temp;
  windOne.innerHTML = "Wind Speed: " + wind;
  humidityOne.innerHTML = "Humidity: " + humidity;
  uvIndex.innerHTML = "UV Index: " + uvIn;
};
// _________________________________________________________________












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




