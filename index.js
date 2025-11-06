// Calculator

let display = document.getElementById('display');
let output = document.getElementById('calcOut')

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    output.value = '';
}

function calculateResult() {
    let input = display.value
    let result;

    if(input.includes('+')) {
        let numbers = input.split('+');
        result = Number(numbers[0]) + Number(numbers[1]);
    } else if(input.includes('-')) {
        let numbers = input.split('-');
        result = Number(numbers[0]) - Number(numbers[1]);
    } else if(input.includes('*')) {
        let numbers = input.split('*');
        result = Number(numbers[0]) * Number(numbers[1]);
    } else if(input.includes('/')) {
        let numbers = input.split('/');
        result = Number(numbers[0]) / Number(numbers[1])
    }
    output.value = result;
}

// 
