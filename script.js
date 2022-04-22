
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operate');
const screen = document.getElementById('screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let currentNumber = '';
let arrayNums = [];
let numberOps = [];
let numSelection = '';
let sum;

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
    arrayNums.push(numSelection);
    if (e.target.id == "+" || "-" || "/" || "*") {
        screen.textContent = e.target.id;
        numberOps.splice(0,1, e.target.id);
        numberOps.length = 1;
    }
    if (arrayNums.length == 2) {
        sum = calculation();
        console.log(sum);
        arrayNums = [];
        arrayNums.push(sum);
    }
    
    currentNumber = '';
}

function calculation() {
  
    if (arrayNums.length == 1) {
        arrayNums.push(numSelection);
    }

    if (numberOps.includes('+')) {
        return operate(add,...arrayNums);
        //numberOps = [];
    } 
    if (numberOps.includes('-')) {
        return operate(subtract,...arrayNums);
        //numberOps = [];
    }
    if (numberOps.includes('/')) {
        return operate(divide,...arrayNums);
        //numberOps = [];
    }
    if (numberOps.includes('*')) {
        return operate(multiply,...arrayNums);
        //numberOps = [];
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
