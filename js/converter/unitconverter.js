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