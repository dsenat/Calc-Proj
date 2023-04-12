//Set my dom elements
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals');

//set my variables to a string
let firstNum = ''
let secondNum = ''
let currentOperator = ''
let result = null
let resetDisplay = false

//My functions
//Reset calculator function
function resetCalculator() {
    firstNum = ''
    secondNum = ''
    currentOperator = ''
    result = null
    resetDisplay = false
}
//Add numbers to my display function
function appendNumber(number) {
    if (display.value === '0' || resetDisplay) {
        display.value = number;
        resetDisplay = false;
    } else {
        display.value += number;
    }
}
//My decimal function
function decimal() {
    if (resetDisplay) {
        display.value = '0.';
        resetDisplay = false;
        return;
    }

    if (display.value.includes('.')) return;

    display.value += '.';
}
//The chosen operator function
function chosenOperator(operator) {
    if (currentOperator && !resetDisplay) {
        calculate();
    }

    currentOperator = operator;
    firstNum = display.value;
    resetDisplay = true;
}
// Perform calculations functions
function calculate() {
    if (!currentOperator || resetDisplay) return;

    secondNum = display.value;
    switch (currentOperator) {
        case '+':
            result = Number(firstNum) + Number(secondNum);
            break;
        case '-':
            result = Number(firstNum) - Number(secondNum);
            break;
        case '*':
            result = Number(firstNum) * Number(secondNum);
            break;
        case '/':
            result = Number(firstNum) / Number(secondNum);
            break;
        default:
            return;
    }

    display.value = result;
    currentOperator = '';
    resetDisplay = true;
}

//My loops for each button
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chosenOperator(button.textContent);
    });
});

equalsButton.addEventListener('click', calculate);

clearButton.addEventListener('click', () => {
    display.value = '0';
    resetCalculator();
});

decimalButton.addEventListener('click', decimal);
