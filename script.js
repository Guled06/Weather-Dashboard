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

      $(".weather-card").removeClass("card-loading");

    });
  }
    

  function fetchForecastForCity (search) {

    var queryUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    search +
    "&units=imperial&appid=" +
    apiKey;
    
    $(".forecast-card").empty();

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

  
      var dayOne = (data.list[0]);
      var dayOneDate = moment().add(1, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayOne.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayOne.main.humidity + "%");
      
      $("#dayOne").append(dayOneDate);
      $("#dayOne").append(tempP);
      $("#dayOne").append(humidityP);
      
      var dayTwo = (data.list[8]);
      var dayTwoDate = moment().add(2, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayTwo.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayTwo.main.humidity + "%");

      $("#dayTwo").append(dayTwoDate);
      $("#dayTwo").append(tempP);
      $("#dayTwo").append(humidityP);

      var dayThree = (data.list[16]);
      var dayThreeDate = moment().add(3, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayThree.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayThree.main.humidity + "%");

      $("#dayThree").append(dayThreeDate);
      $("#dayThree").append(tempP);
      $("#dayThree").append(humidityP);


      var dayFour = (data.list[24]);
      var dayFourDate = moment().add(4, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayFour.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayFour.main.humidity + "%");
      
      $("#dayFour").append(dayFourDate);
      $("#dayFour").append(tempP);
      $("#dayFour").append(humidityP);

      var dayFive = (data.list[32]);
      // var dayFiveIcon = data.list[32].weather[0].icon;
      var dayFiveDate = moment().add(5, "days").format("M/D/YYYY");
      var tempP = $("<p>").text("Temp: " + dayFive.main.temp + "°");
      var humidityP  = $("<p>").text("Humidity: " + dayFive.main.humidity + "%");

      // $("#dayFive").append(dayFiveIcon);
      $("#dayFive").append(dayFiveDate);
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

