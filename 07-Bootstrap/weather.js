$(function(){

  var periods = [];

  // Get the Templates
  var templateCard = $("#periodTemplateCard").html();
  var templateList = $("#periodTemplateList").html();

  getWeather();

  function getWeather(){
    $.get( "https://api.weather.gov/gridpoints/OAX/82,59/forecast")
    .done(function(data) {

      var generatedAt = new Date(data.properties.generatedAt);

      $("#properties-generated").text("Generated on " + generatedAt.toLocaleDateString() + " at " + generatedAt.toLocaleTimeString());

      periods = data.properties.periods;

      renderPeriods();
    })
    .fail(function(responseText, textStatus, req) {
      console.info(arguments);
      alert( textStatus );
    })
    .always(function() {
      console.log( "finished, weather it worked or not.  (See what I did there?)" );
    });
  }

  $(".view-mode").click(function(){
    $(".view-mode").removeClass("btn-outline-primary");

    $(this).addClass("btn-outline-primary");
  });

  // The weather details are different because they are created dynamically.
  // We could do it the normal way, right after they are created.
  // See loop below for commented out code.
  $(document.body).on("click", ".weather-detail", function(){

    var idx = $(this).attr("idx");  
    var period = periods.find( o => o.number == idx);

    $("#periodName").text(`Weather details for ${period.name}`);
    $("#icon").attr("src", period.icon.replace(/medium/, "large"));
    $("#detailedForecast").text(period.detailedForecast);

    $('#weatherModal').modal('show');  
  });


  $("input[name='tempOptions']").change(function(){
    $("#properties-periods-card").empty();
    $("#properties-periods-list").empty();

    renderPeriods();
  });

  function renderPeriods(){
    var selectedTempType = $("input[name='tempOptions']:checked").val();

    console.log(selectedTempType);

    for(var idx = 0 ; idx < periods.length ; idx++){
      var period = periods[idx];
      var tempToDisplay = tempHelper.getTemp(selectedTempType, period.temperatureUnit, period.temperature);

      $("#properties-periods-card").append(
        templateCard
          .replace(/{name}/, period.name)
          .replace(/{temperature}/, tempToDisplay )
          .replace(/{windSpeed}/, period.windSpeed)
          .replace(/{windDirection}/, period.windDirection)
          .replace(/{icon}/, period.icon.replace(/medium/, "large"))
          .replace(/{shortForecast}/, period.shortForecast)
          .replace(/{idx}/, period.number)
      )

      $("#properties-periods-list").append(
        templateList
          .replace(/{name}/, period.name)
          .replace(/{temperature}/, tempToDisplay )
          .replace(/{windSpeed}/, period.windSpeed)
          .replace(/{windDirection}/, period.windDirection)
          .replace(/{icon}/, period.icon)
          .replace(/{shortForecast}/, period.shortForecast)
          .replace(/{idx}/, period.number)
      );
    }

    // This is where we could also define our click events.
    // This code outside the loop will not work.

    // $(".weather-detail").click(function(){
    //   var idx = $(this).attr("idx");  
    //   var period = periods.find( o => o.number == idx);
    //   $("#periodName").text(`Weather details for ${period.name}`);
    //   $("#detailedForecast").text(period.detailedForecast);
    //   $('#weatherModal').modal('show');  
    // });
  }  
});