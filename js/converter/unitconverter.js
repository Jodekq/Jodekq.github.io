function convertlength() {
  var inputValue = parseFloat(document.getElementById("inputValue-length").value);
  var fromUnit = document.getElementById("fromUnit-length").value;
  var toUnit = document.getElementById("toUnit-length").value;
  var result = 0;

  if (fromUnit === "m") {
    if (toUnit === "cm") {
      result = inputValue * 100;
    } else if (toUnit === "in") {
      result = inputValue * 39.37;
    } else if (toUnit === "ft") {
      result = inputValue * 3.281;
    } else if (toUnit === "km") {
      result = inputValue / 1000;
    } else if (toUnit === "mi") {
      result = inputValue / 1609.34;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "cm") {
    if (toUnit === "m") {
      result = inputValue / 100;
    } else if (toUnit === "in") {
      result = inputValue / 2.54;
    } else if (toUnit === "ft") {
      result = inputValue / 30.48;
    } else if (toUnit === "km") {
      result = inputValue / 100000;
    } else if (toUnit === "mi") {
      result = inputValue / 160934;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "in") {
    if (toUnit === "m") {
      result = inputValue / 39.37;
    } else if (toUnit === "cm") {
      result = inputValue * 2.54;
    } else if (toUnit === "ft") {
      result = inputValue / 12;
    } else if (toUnit === "km") {
      result = inputValue / 39370.1;
    } else if (toUnit === "mi") {
      result = inputValue / 63360;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "ft") {
    if (toUnit === "m") {
      result = inputValue / 3.281;
    } else if (toUnit === "cm") {
      result = inputValue * 30.48;
    } else if (toUnit === "in") {
      result = inputValue * 12;
    } else if (toUnit === "km") {
      result = inputValue / 3280.84;
    } else if (toUnit === "mi") {
      result = inputValue / 5280;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "km") {
    if (toUnit === "m") {
      result = inputValue * 1000;
    } else if (toUnit === "cm") {
      result = inputValue * 100000;
    } else if (toUnit === "in") {
      result = inputValue * 39370.1;
    } else if (toUnit === "ft") {
      result = inputValue * 3280.84;
    } else if (toUnit === "mi") {
      result = inputValue / 1.609;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "mi") {
    if (toUnit === "m") {
      result = inputValue * 1609.34;
    } else if (toUnit === "cm") {
      result = inputValue * 160934;
    } else if (toUnit === "in") {
      result = inputValue * 63360;
    } else if (toUnit === "ft") {
      result = inputValue * 5280;
    } else if (toUnit === "km") {
      result = inputValue * 1.609;
    } else {
      result = inputValue;
    }
  }

  document.getElementById("length-result").innerHTML = result.toFixed(2) + " " + toUnit;
}


function converttemperature() {
    var inputValue = parseFloat(document.getElementById("temperature-inputValue").value);
    var fromUnit = document.getElementById("temperature-fromUnit").value;
    var toUnit = document.getElementById("temperature-toUnit").value;
    var result = 0;
    
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
      } else if (toUnit === "kelvin") {
        result = inputValue + 273.15;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (inputValue - 32) * 5/9;
      } else if (toUnit === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        result = inputValue - 273.15;
      } else if (toUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
      } else {
        result = inputValue;
      }
    }
    
    document.getElementById("temperature-result").innerHTML = result.toFixed(2) + " " + toUnit;
}

function convertweight() {
    var inputValue = parseFloat(document.getElementById("weight-inputValue").value);
    var fromUnit = document.getElementById("weight-fromUnit").value;
    var toUnit = document.getElementById("weight-toUnit").value;
    var result = 0;

    if (fromUnit === "kilogram") {
      if (toUnit === "gram") {
        result = inputValue * 1000;
      } else if (toUnit === "milligram") {
        result = inputValue * 1_000_000;
      } else if (toUnit === "metric ton") {
        result = inputValue * 0.001;
      } else if (toUnit === "pound") {
        result = inputValue * 2.20462;
      } else if (toUnit === "ounce") {
        result = inputValue * 35.274;
      } else if (toUnit === "stone") {
        result = inputValue * 0.157473;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "gram") {
      if (toUnit === "kilogram") {
        result = inputValue / 1000;
      } else if (toUnit === "milligram") {
        result = inputValue * 1000;
      } else if (toUnit === "metric ton") {
        result = inputValue / 1_000_000;
      } else if (toUnit === "pound") {
        result = inputValue / 453.592;
      } else if (toUnit === "ounce") {
        result = inputValue / 28.3495;
      } else if (toUnit === "stone") {
        result = inputValue / 6350.29;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "milligram") {
      if (toUnit === "kilogram") {
        result = inputValue / 1_000_000;
      } else if (toUnit === "gram") {
        result = inputValue / 1000;
      } else if (toUnit === "metric ton") {
        result = inputValue / 1_000_000_000;
      } else if (toUnit === "pound") {
        result = inputValue / 453592.37;
      } else if (toUnit === "ounce") {
        result = inputValue / 28349.523;
      } else if (toUnit === "stone") {
        result = inputValue / 6_350_293.18;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "metric ton") {
      if (toUnit === "kilogram") {
        result = inputValue * 1000;
      } else if (toUnit === "gram") {
        result = inputValue * 1_000_000;
      } else if (toUnit === "milligram") {
        result = inputValue * 1_000_000_000;
      } else if (toUnit === "pound") {
        result = inputValue * 2204.62;
      } else if (toUnit === "ounce") {
        result = inputValue * 35_273.9619;
      } else if (toUnit === "stone") {
        result = inputValue * 157.473;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "pound") {
      if (toUnit === "kilogram") {
        result = inputValue / 2.20462;
      } else if (toUnit === "gram") {
        result = inputValue * 453.592;
      } else if (toUnit === "milligram") {
        result = inputValue * 453_592.37;
      } else if (toUnit === "metric ton") {
        result = inputValue / 2204.62;
      } else if (toUnit === "ounce") {
        result = inputValue * 16;
      } else if (toUnit === "stone") {
        result = inputValue / 14;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "ounce") {
      if (toUnit === "kilogram") {
        result = inputValue / 35.274;
      } else if (toUnit === "gram") {
        result = inputValue * 28.3495;
      } else if (toUnit === "milligram") {
        result = inputValue * 28_349.5231;
      } else if (toUnit === "metric ton") {
        result = inputValue / 35_273.962;
      } else if (toUnit === "pound") {
        result = inputValue / 16;
      } else if (toUnit === "stone") {
        result = inputValue / 224;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "stone") {
      if (toUnit === "kilogram") {
        result = inputValue / 0.157473;
      } else if (toUnit === "gram") {
        result = inputValue * 6350.29;
      } else if (toUnit === "milligram") {
        result = inputValue * 6_350_293.18;
      } else if (toUnit === "metric ton") {
        result = inputValue / 157.473;
      } else if (toUnit === "pound") {
        result = inputValue * 14;
      } else if (toUnit === "ounce") {
        result = inputValue * 224;
      } else {
        result = inputValue;
      } 
  } 

  document.getElementById("weight-result").innerHTML = result.toFixed(2) + " " + toUnit;
}

function convertTime(inputValue, fromUnit, toUnit) {
  let result = 0.0;

  if (fromUnit === "millisecond") {
    if (toUnit === "second") {
      result = inputValue / 1000;
    } else if (toUnit === "minute") {
      result = inputValue / 60000;
    } else if (toUnit === "hour") {
      result = inputValue / 3600000;
    } else if (toUnit === "day") {
      result = inputValue / 86400000;
    } else if (toUnit === "week") {
      result = inputValue / 604800000;
    } else if (toUnit === "month") {
      result = inputValue / 2628000000;
    } else if (toUnit === "year") {
      result = inputValue / 31536000000;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "second") {
    if (toUnit === "millisecond") {
      result = inputValue * 1000;
    } else if (toUnit === "minute") {
      result = inputValue / 60;
    } else if (toUnit === "hour") {
      result = inputValue / 3600;
    } else if (toUnit === "day") {
      result = inputValue / 86400;
    } else if (toUnit === "week") {
      result = inputValue / 604800;
    } else if (toUnit === "month") {
      result = inputValue / 2628000;
    } else if (toUnit === "year") {
      result = inputValue / 31536000;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "minute") {
    if (toUnit === "millisecond") {
      result = inputValue * 60000;
    } else if (toUnit === "second") {
      result = inputValue * 60;
    } else if (toUnit === "hour") {
      result = inputValue / 60;
    } else if (toUnit === "day") {
      result = inputValue / 1440;
    } else if (toUnit === "week") {
      result = inputValue / 10080;
    } else if (toUnit === "month") {
      result = inputValue / 43800;
    } else if (toUnit === "year") {
      result = inputValue / 525600;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "hour") {
    if (toUnit === "millisecond") {
      result = inputValue * 3600000;
    } else if (toUnit === "second") {
      result = inputValue * 3600;
    } else if (toUnit === "minute") {
      result = inputValue * 60;
    } else if (toUnit === "day") {
      result = inputValue / 24;
    } else if (toUnit === "week") {
      result = inputValue / 168;
    } else if (toUnit === "month") {
      result = inputValue / 730;
    } else if (toUnit === "year") {
      result = inputValue / 8760;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "day") {
    if (toUnit === "millisecond") {
      result = inputValue * 86400000;
    } else if (toUnit === "second") {
      result = inputValue * 86400;
    } else if (toUnit === "minute") {
      result = inputValue * 1440;
    } else if (toUnit === "hour") {
      result = inputValue * 24;
    } else if (toUnit === "week") {
      result = inputValue / 7;
    } else if (toUnit === "month") {
      result = inputValue / 30.417;
    } else if (toUnit === "year") {
      result = inputValue / 365;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "week") {
    if (toUnit === "millisecond") {
      result = inputValue * 604800000;
    } else if (toUnit === "second") {
      result = inputValue * 604800;
    } else if (toUnit === "minute") {
      result = inputValue * 10080;
    } else if (toUnit === "hour") {
      result = inputValue * 168;
    } else if (toUnit === "day") {
      result = inputValue * 7;
    } else if (toUnit === "month") {
      result = inputValue / 4.345;
    } else if (toUnit === "year") {
      result = inputValue / 52.143;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "month") {
    if (toUnit === "millisecond") {
      result = inputValue * 2628000000;
    } else if (toUnit === "second") {
      result = inputValue * 2628000;
    } else if (toUnit === "minute") {
      result = inputValue * 43800;
    } else if (toUnit === "hour") {
      result = inputValue * 730;
    } else if (toUnit === "day") {
      result = inputValue * 30.417;
    } else if (toUnit === "week") {
      result = inputValue * 4.345;
    } else if (toUnit === "year") {
      result = inputValue / 12;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "year") {
    if (toUnit === "millisecond") {
      result = inputValue * 31536000000;
    } else if (toUnit === "second") {
      result = inputValue * 31536000;
    } else if (toUnit === "minute") {
      result = inputValue * 525600;
    } else if (toUnit === "hour") {
      result = inputValue * 8760;
    } else if (toUnit === "day") {
      result = inputValue * 365;
    } else if (toUnit === "week") {
      result = inputValue * 52.143;
    } else if (toUnit === "month") {
      result = inputValue * 12;
    } else {
      result = inputValue;
    }
  } else {
    result = inputValue;
  }

  return result;
}

function formatTimeUnit(unit, value) {
  if (value === 1) {
    return `${value} ${unit}`;
  } else {
    return `${value} ${unit}s`;
  }
}

function convertTimeAndDisplay() {
  const inputValue = parseFloat(document.getElementById("time-inputValue").value);
  const fromUnit = document.getElementById("time-fromUnit").value;
  const toUnit = document.getElementById("time-toUnit").value;

  const convertedValue = convertTime(inputValue, fromUnit, toUnit);
  document.getElementById("time-result").textContent = formatTimeUnit(toUnit, convertedValue);
}


function convertCurrency() {
  	
}