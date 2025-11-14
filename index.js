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

// I HATE EVERYTHING AND EVERYONE

let vertSlider1 = document.getElementById('verticalSlider')
let horSlider1 = document.getElementById('horizontalSlider')
let evilOutput = document.getElementById('value')
let evilOutput2 = document.getElementById('value2')
let vertSlider2 = document.getElementById('verticalSlider2')
let horSlider2 = document.getElementById('horizontalSlider2')

function updateValue() {
   const value1 = Number(vertSlider1.value)
   const value2 = Number(horSlider1.value)

   const total = value1 + value2
   evilOutput.textContent = total
   
}

function updateValue2() {
    const value1 = Number(vertSlider2.value)
    const value2 = Number(horSlider2.value)

    const total = value1 + value2
    evilOutput2.textContent = total
}

vertSlider1.addEventListener('input', updateValue);
horSlider1.addEventListener('input', updateValue);

vertSlider2.addEventListener('input', updateValue2);
horSlider2.addEventListener('input', updateValue2);

updateValue();
updateValue2();

// Operators

const checkboxes = document.querySelectorAll('input[name="operators"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            })
        }
    })
})




function evilCalc() {
    const value1 = Number(vertSlider1.value)
    const value2 = Number(horSlider1.value)
    const total = value1 + value2

    const value3 = Number(vertSlider2.value)
    const value4 = Number(horSlider2.value)
    const total2 = value3 + value4

    const result = ` ${total} + ${total2} `
    
}

evilCalc()