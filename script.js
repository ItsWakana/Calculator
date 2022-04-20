
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

const numbers = document.querySelectorAll('.numbers');
const operation = document.querySelectorAll('.operate');
const screen = document.getElementById('screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let currentNumber;
let arrayNums = [];
let numberOps = [];


function resetCalc() {
    arrayNums = [];
    numberOps = [];
    currentNumber = '';
    screen.textContent = '';
}
Array.from(numbers).forEach((number) => {
    number.addEventListener('click', (e) => {
        currentNumber = parseInt(e.target.id);
        screen.textContent = `${currentNumber}`;
    });
});

Array.from(operation).forEach((elem) => {
    elem.addEventListener('click', (e) => {
        if (e.target.id == "+" || "-" || "/" || "*") {
            screen.textContent = e.target.id;
            numberOps.push(e.target.id);
            numberOps.length = 1;
        }
        arrayNums.push(currentNumber);
});
});

equals.addEventListener('click', () => {
    arrayNums.push(currentNumber);
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
});

clear.addEventListener('click', resetCalc);
