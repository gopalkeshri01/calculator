const inputbox = document.getElementById("inputbox");

function appendToDisplay(input) {
    inputbox.value += input;
}

function clearDisplay() {
    inputbox.value = "";
}

function calculate() {
    inputbox.value = eval(inputbox.value)
}