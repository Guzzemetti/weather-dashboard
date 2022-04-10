// open weather API fetch request link and API KeyboardEvent
var apiKey = d24820a4b09e08d1bb27ae1a68013291;

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;

// Variable to store user input
var citySearch = document.getElementById("citySearch").value;

fetch(queryURL);
