// Add event listeners to all buttons.
// When a button that corresponds to a number is clicked, update display with that value.
let buttons = document.getElementsByTagName("button");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",updateDisplay);
}

function updateDisplay() {
    var input = this.innerHTML;
    console.log(input);
    document.getElementById("display").value = input;
}

