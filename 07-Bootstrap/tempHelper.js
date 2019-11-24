(function(tempHelper){

  tempHelper.farSymbol = "&#8457;";
  tempHelper.celSymbol = "&#8451;";

  tempHelper.getTemp = function(selectedTempType, temperatureUnit, temperature){

    if(selectedTempType === "fahrenheit" && temperatureUnit === "F"){
      return temperature + tempHelper.farSymbol;
    }

    if(selectedTempType === "celsius" && temperatureUnit === "C"){
      return temperature + tempHelper.celSymbol;
    }

    var convertedTemp = tempHelper.convertTemp(selectedTempType, temperature);

    //return convertedTemp.toFixed(2) + " " 
    return Math.floor(convertedTemp) + " " 
                    + (selectedTempType.toLowerCase() === "fahrenheit" 
                          ? "&#8457;"
                          : "&#8451;")
  }

  tempHelper.convertTemp = function (type, temp){
    switch(type.toLowerCase()){
      case "celsius":
        return convertedTemp = toCelsius(temp);
      case "fahrenheit":
        return convertedTemp = toFahrenheit(temp);
      default: //Should never get here since we control value.
        return "Unknown Temp Type!!"
    }    
  }

  //These methods are not reachable outside "tempHolder"
  function toCelsius(f) {
    return (5/9) * (f-32);
  }

  function toFahrenheit(c) {
    return c * 9 / 5 + 32;
  }  

})(window.tempHelper || (window.tempHelper = {}) );