
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operate');
const screen = document.getElementById('screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const buttons = document.querySelector('.button-container').childNodes;

let currentNumber = '';
let arrayNums = [];
let numberOps = [];
let numSelection = '';
let sum;
let finalSum;

function multiply(...nums) {
    let sum = nums.reduce((total, num) => total * num);
    screen.textContent = sum;
    return sum.toFixed(2);
}

function add(...nums) {
    let sum = nums.reduce((total, num) => total += num);
    screen.textContent = sum;
    return sum.toFixed(2);
}

function subtract(...nums) {
    let sum = nums.reduce((total, num) => total -= num);
    screen.textContent = sum;
    return sum.toFixed(2);
}

function divide(...nums) {
    let sum = nums.reduce((total, num) => total / num);
    screen.textContent = sum;
    return sum.toFixed(2);
}   

function operate(operator,...nums) {
    return operator(...nums);
}

function resetCalc() {
    arrayNums = [];
    numberOps = [];
    currentNumber = '';
    numSelection = '';
    screen.textContent = 0;
}

function parseNumber(e) {
    currentNumber += e.target.id;
    numSelection = parseFloat(currentNumber);
    if (currentNumber.length < 10) screen.textContent = currentNumber;
}

function parseOperation(e) {
    arrayNums.push(numSelection);
    screen.textContent = e.target.id;
    if (arrayNums.length == 2) {
        sum = calculation();
        arrayNums = [];
        arrayNums.push(sum);
    }

    if (e.target.id == "+" || "-" || "/" || "*") {
        numberOps.splice(0,1, e.target.id);
        numberOps.length = 1;
    }
    currentNumber = '';
}

function finalOperation(e) {
    arrayNums.push(numSelection);
    if (arrayNums.length == 2) {
        finalSum = calculation();
        arrayNums = [];
    }

    if (e.target.id == "+" || "-" || "/" || "*") {
        numberOps.splice(0,1, e.target.id);
        numberOps.length = 1;
    }
    currentNumber = '';
    numSelection = parseFloat(finalSum);
}

function calculation() {
    if (arrayNums.length == 1) {
        arrayNums.push(numSelection);
    }
    if (numberOps.includes('+')) {
        return operate(add,...arrayNums);
    } 
    if (numberOps.includes('-')) {
        return operate(subtract,...arrayNums);
    }
    if (numberOps.includes('/')) {
        return operate(divide,...arrayNums);
    }
    if (numberOps.includes('*')) {
        return operate(multiply,...arrayNums);
    }
}

numbers.forEach(number => {
    number.addEventListener('click', parseNumber);
});

operations.forEach(operator => {
    operator.addEventListener('click', parseOperation);
});

equals.addEventListener('click', finalOperation);

clear.addEventListener('click', resetCalc);