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

var inputHappened = function(currentInput) {
    // if it is number
    if (isANumber(currentInput)) {
        // display number entered
        var output = currentInput;
    } else {
        var output = "Please enter numbers only."
    }
    display (output);
};


// Part 1
// Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.

// After receiving input it should show that same temperature in both Kelvin and Celsius.