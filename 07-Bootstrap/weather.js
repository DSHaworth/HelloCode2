$(function(){
  var farSymbol = "&#8457;";
  var celSymbol = "&#8451;";

  var weatherPeriods = [];

  getWeather();

  function getWeather(){
    $.get( "https://api.weather.gov/gridpoints/OAX/82,59/forecast")
    .done(function(data) {
      console.info(data);

      periods = data.properties.periods;

      $("#properties-generated").text(new Date(data.properties.generatedAt));

      var template = $("#periodTemplate").html();

      for(var idx = 0 ; idx < periods.length ; idx++){
        var period = periods[idx];

        $("#properties-periods").append(
          template
            .replace(/{name}/, period.name)
            .replace(/{temperature}/, period.temperature + (period.temperatureUnit.toUpperCase() === "F" ? farSymbol : celSymbol) )
            .replace(/{windSpeed}/, period.windSpeed)
            .replace(/{windDirection}/, period.windDirection)
            .replace(/{icon}/, period.icon)
            .replace(/{shortForecast}/, period.shortForecast)
            .replace(/{idx}/, period.number)
        )
      }

      $(".weather-detail").click(function(){
        var idx = $(this).attr("idx");

        var period = periods.find( o => o.number == idx);

        $("#periodName").text(`Weather details for ${period.name}`);
        $("#detailedForecast").text(period.detailedForecast);

        $('#weatherModal').modal('show');

      });

    })
    .fail(function(responseText, textStatus, req) {
      console.info(arguments);
      alert( textStatus );
    })
    .always(function() {
      console.log( "finished, wether it worked or not.  (See what I did there?)" );
    });

  }



});