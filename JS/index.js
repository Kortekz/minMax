// Selecting the DOM elements 
let button = document.querySelector('[data-btn]')
let input = document.querySelector('[data-num]')
let minResult = document.querySelector('[data-dis1]')
let maxResult = document.querySelector('[data-dis2]')

// Function to handle calculation of min and max values
function calculateMinMax() {
    let inputValues = input.value.split(' ').map(Number).filter(value => !isNaN(value))

    if (inputValues.length >= 4) {
        minResult.value = Math.min(...inputValues)
        maxResult.value = Math.max(...inputValues)
    } 
    else {
        minResult.value = "4 numbers required"
        maxResult.value = "4 numbers required"
    }
}
// Adding event listener to the button
button.addEventListener('click', calculateMinMax)
