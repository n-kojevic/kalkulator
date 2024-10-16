"use strict"

// Select display and buttons
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

// Set display variable to track value
let displayValue = "";

// Create listener for click on every button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        // Set current button value into new variable
        let buttonText = e.target.textContent;

        // Clear display if C is clicked
        if(buttonText === 'C') {
            displayValue = "";
            display.value = displayValue;
        }

        // Set result on display if = is clicked

        else if(buttonText === '=') {
            try {
                display.value = eval(displayValue);
                displayValue = display.value;

            // Catch and display error
            } catch(error){
            display.value = 'Error';
            }
        }
        // Add every new clicked value on display
        else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    });
});
 





