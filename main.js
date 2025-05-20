// Get the display element
const display = document.getElementById("display");

// Function to append values to the display
function displayValue(value) {
    display.value += value;
}

// Function to clear the display (AC button)
document.querySelector(".ac").onclick = function () {
    display.value = "";
};


// Function to delete the last character (DEL button)
document.querySelector(".del").onclick = function () {
    display.value = display.value.slice(0, -1);
};

// Function to evaluate the expression (= button)
document.querySelector(".equalto").onclick = function () {
    try {
        // Use eval to calculate result
        display.value = eval(display.value);
    } catch (error) {
        // Show error if expression is invalid
        display.value = "Error";
    }
};
