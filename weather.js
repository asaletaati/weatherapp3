function search() {
  var apiKey = "5863935ee9cca4c02ed68203f807c65b";
  var cityName = document.getElementById("search-box").value;

  if(cityName !== "") {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=metric" + "&appid=" + apiKey)
    .then(response => response.json())
    .then(data => {
      var weatherDetails = document.getElementById("weather-details");
      weatherDetails.innerHTML = "City: " + data.name + "<br>" + "Temperature: " + data.main.temp + "°C" + "<br>" + "Current time: " + new Date(data.dt * 1000).toLocaleString();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    alert("Please enter city name!");
  }
}

function currentLocation() {
  var apiKey = "5863935ee9cca4c02ed68203f807c65b";

  navigator.geolocation.getCurrentPosition(function(position) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + "&units=metric" + "&appid=" + apiKey)
    .then(response => response.json())
    .then(data => {
      var weatherDetails = document.getElementById("weather-details");
      weatherDetails.innerHTML = "City: " + data.name + "<br>" + "Temperature: " + data.main.temp + "°C" + "<br>" + "Current time: " + new Date(data.dt * 1000).toLocaleString();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
}
