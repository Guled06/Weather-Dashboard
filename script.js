$(function () {
  
  var apiKey = "c5b501b47a94dbd44148a427c20e831f";
  
  function fetchWeatherForCity(city) {

    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;

    $(".weather-card").addClass("card-loading");

    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;
      
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        
      var currentDate = moment().format("M/D/YYYY");
      
      $("#city-name").text(data.name + " " + currentDate);
      
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

      $(".weather-card").removeClass("card-loading");

    });
  }
    
  function fetchForecastForCity (search) {

    var queryUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    search +
    "&units=imperial&appid=" +
    apiKey;
    
    $(".forecast-card").addClass("card-loading");
    
    var queryUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    search +
    "&units=imperial&appid=" +
    apiKey;
    
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      
      $(".forecast-card").empty();
      
      var dayOne = (data.list[0]);
      var dayOneIcon = data.list[0].weather[0].icon;
      var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png");
      var dayOneDate = moment().add(1, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayOne.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayOne.main.humidity + "%");
      
      $("#dayOne").append(dayOneDate);
      $("#dayOne").append(dayOneImg);
      $("#dayOne").append(tempP);
      $("#dayOne").append(humidityP);
      
      var dayTwo = (data.list[8]);
      var dayTwoIcon = data.list[8].weather[0].icon;
      var dayTwoImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png");
      var dayTwoDate = moment().add(2, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayTwo.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayTwo.main.humidity + "%");

      $("#dayTwo").append(dayTwoDate);
      $("#dayTwo").append(dayTwoImg);
      $("#dayTwo").append(tempP);
      $("#dayTwo").append(humidityP);

      var dayThree = (data.list[16]);
      var dayThreeIcon = data.list[16].weather[0].icon;
      var dayThreeImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png");
      var dayThreeDate = moment().add(3, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayThree.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayThree.main.humidity + "%");

      $("#dayThree").append(dayThreeDate);
      $("#dayThree").append(dayThreeImg);
      $("#dayThree").append(tempP);
      $("#dayThree").append(humidityP);

      var dayFour = (data.list[24]);
      var dayFourIcon = data.list[24].weather[0].icon;
      var dayFourImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png");
      var dayFourDate = moment().add(4, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayFour.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayFour.main.humidity + "%");
      
      $("#dayFour").append(dayFourDate);
      $("#dayFour").append(dayFourImg);
      $("#dayFour").append(tempP);
      $("#dayFour").append(humidityP);

      var dayFive = (data.list[32]);
      var dayFiveIcon = data.list[32].weather[0].icon;
      var dayFiveImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png");
      var dayFiveDate = moment().add(5, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayFive.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayFive.main.humidity + "%");

      $("#dayFive").append(dayFiveDate);
      $("#dayFive").append(dayFiveImg);
      $("#dayFive").append(tempP);
      $("#dayFive").append(humidityP);

      $(".forecast-card").removeClass("card-loading");

    });
  }

  $(document).on("click", ".city", function () {
    
    var city = $(this).attr("data-city");
    var search = $(this).attr("data-city");
   

    fetchWeatherForCity(city);
    fetchForecastForCity(search);
  });

  $("#search-form").on("submit", function (event) {

    event.preventDefault();

    var city = $("#search-input").val().trim();
    var search = $("#search-input").val().trim();

    if (city === "") {
      return;
    }

    fetchWeatherForCity(city);
    fetchForecastForCity(search);
  });


});

