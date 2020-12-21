$(function () {
  
  var apiKey = "c5b501b47a94dbd44148a427c20e831f";

  
  function fetchWeatherForCity(city) {

    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      
      console.log(data);

      $("#city-name").text(data.name + " Weather");

      var iconUrl =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

      var iconImg = $("<img>").attr({
        src: iconUrl,
        alt: data.weather[0].description,
      });

      $("#weather-icon").empty().append(iconImg);

      $("#temp").text(data.main.temp + "°");
      $("#wind").text(data.wind.speed + " mph");
      $("#humidity").text(data.main.humidity + " %");

    });
  }


  function fetchForecastForCity (city){

    var queryUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    search +
    "&units=imperial&appid=" +
    apiKey;
    
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {

      console.log(data);

    });
  }


  $(document).on("click", ".city", function () {
    
    var city = $(this).attr("data-city");

    fetchWeatherForCity(city);
  });

  $("#search-form").on("submit", function (event) {

    event.preventDefault();

    var city = $("#search-input").val().trim();

    if (city === "") {
      return;
    }

    fetchWeatherForCity(city);
  });
});

