// Add event listeners to all buttons.
// When a button that corresponds to a number is clicked, update display with that value.
let buttons = document.getElementsByTagName("button");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", calculate);
}

//Calculates user input
function calculate() {

    // Grabs the value found in the buttons and stores it in variable input.
    let input = this.innerHTML;

    // Displays value from the button that has been pressed.
    let display = document.getElementById("display");

    // If the button that has been pressed is '=', calculate numbers given in the display.
    if (input == '=') {
        display.value = eval(display.value);

        // else if 'AC' button is pressed, clear display (change to 0).
    } else if (input == 'AC') {
        display.value = '0';

        // Otherwise, check if display is on 0, if so, then change 0 to a non-zero value, if not, then add on to the non-zero value.
    } else {
        if (display.value == '0') {
            display.value = input;
        } else {
            display.value += input;
        }
    }
}
