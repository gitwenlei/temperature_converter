console.log("hello script js");

// STEP 1
// Display temperature from user input
// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( currentInput );
// };

// STEP 2
// Display temperature from user input with number checking
// Check if input is number
var isANumber = function(currentInput) {
    return !/\D/.test(currentInput); //return true or false
};

// Convert from Fahrenheit to Celsius   oC=(oF-32)/1.8
var convertToCelsius = function (currentInput) {
    var temperatureCelsius = (currentInput-32)/1.8;
    return temperatureCelsius;
}

// Convert from Fahrenheit to Kelvin   K=((℉-32)/1.8)+273.15
var convertToKelvin = function (currentInput) {
    var temperatureKelvin = ((currentInput-32)/1.8)+273.15;
    return temperatureKelvin;
}


var inputHappened = function(currentInput) {
    var parsedInput = parseInt(currentInput)

    // if it is a number
    if (isANumber(parsedInput)) {
        // display temperature in Kelvin
        var output = "Temperature in Celsius " +  convertToCelsius(parsedInput) + "\n\n" + "Temperature in Kelvin " + convertToKelvin(parsedInput);
    } else {
        var output = "Please enter numbers only."
    }
    display (output);
};

// Part 1
// Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.

// After receiving input it should show that same temperature in both Kelvin and Celsius.