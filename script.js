
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operate');
const screen = document.getElementById('screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let currentNumber = '';
let arrayNums = [];
let numberOps = [];
let numSelection = '';

function multiply(...nums) {
    let sum = nums.reduce((total, num) => total * num);
    screen.textContent = sum;
    return sum;
}

function add(...nums) {
    let sum = nums.reduce((total, num) => total += num);
    screen.textContent = sum;
    return sum;
}

function subtract(...nums) {
    let sum = nums.reduce((total, num) => total -= num);
    screen.textContent = sum;
    return sum;
}

function divide(...nums) {
    let sum = nums.reduce((total, num) => total / num);
    screen.textContent = sum;
    return sum;
}   

function operate(operator,...nums) {
    return operator(...nums);
}

function resetCalc() {
    arrayNums = [];
    numberOps = [];
    currentNumber = '';
    numSelection = '';
    screen.textContent = '';
}

function parseNumber(e) {
    currentNumber += parseInt(e.target.id);
    numSelection = parseInt(currentNumber);
    screen.textContent = currentNumber;
}

function parseOperation(e) {
    if (e.target.id == "+" || "-" || "/" || "*") {
        screen.textContent = e.target.id;
        numberOps.push(e.target.id);
        numberOps.length = 1;
    }
    
        arrayNums.push(numSelection);
    
    if (arrayNums.length >= 2) {
        operatorCalculation();
    }
    currentNumber = '';
}

function operatorCalculation() {
    if (arrayNums.length < 2) {
        arrayNums.push(numSelection);
    }
    if (numberOps.includes('+')) {
        operate(add,...arrayNums);
    } 
    if (numberOps.includes('-')) {
        operate(subtract,...arrayNums);
    }
    if (numberOps.includes('/')) {
        operate(divide,...arrayNums);
    }
    if (numberOps.includes('*')) {
        operate(multiply,...arrayNums);
    }
    if (arrayNums.length < 2) {
    arrayNums = [];
    }
}

function calculation() {
    arrayNums.push(numSelection);

    if (numberOps.includes('+')) {
        operate(add,...arrayNums);
        numberOps = [];
    } 
    if (numberOps.includes('-')) {
        operate(subtract,...arrayNums);
        numberOps = [];
    }
    if (numberOps.includes('/')) {
        operate(divide,...arrayNums);
        numberOps = [];
    }
    if (numberOps.includes('*')) {
        operate(multiply,...arrayNums);
        numberOps = [];
    }
    arrayNums = [];

}

numbers.forEach((number) => {
    number.addEventListener('click', parseNumber);
});

operations.forEach((operator) => {
    operator.addEventListener('click', parseOperation);
});

equals.addEventListener('click', calculation);

clear.addEventListener('click', resetCalc);
