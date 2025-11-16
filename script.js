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

const vertSlider1 = document.getElementById('verticalSlider')
const horSlider1 = document.getElementById('horizontalSlider')
const evilOutput = document.getElementById('value')
const evilOutput2 = document.getElementById('value2')
const vertSlider2 = document.getElementById('verticalSlider2')
const horSlider2 = document.getElementById('horizontalSlider2')

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


const help = document.getElementById('help')

function evilCalc() {
    const total1 = Number(vertSlider1.value) + Number(horSlider1.value);
    const total2 = Number(vertSlider2.value) + Number(horSlider2.value);

    const checked = document.querySelector('input[name=operators]:checked');

    if (!checked) {
        help.textContent = "Select an operator";
        return
    }

    const op = checked.value;
    let result;

    if(op.includes('+')) {
        result = total1 + total2;
    } else if(op.includes('-')) {
        result = total1 - total2;
    } else if(op.includes('*')) {
        result = total1 * total2;
    } else if (op.includes('/')) {
        result = total1 / total2; 
    }

    help.textContent = result;

}

evilCalc()