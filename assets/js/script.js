// open weather API fetch request link and API KeyboardEvent
const apiKey = "fc02d6d30dd32f5567b9706fc1c7ef42";

// Url for geolocation 
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=5&appid=${apiKey}`;


var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey`;

// Variable to store user input
var citySearch = document.getElementById("citySearch");


// TD Make variables for DOM Elements


 // Add timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);





// fetch(weatherApiUrl){
//     .then(response => response.json())
//     .then(data => console.log(data));
// }
