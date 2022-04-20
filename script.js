
function multiply(...nums) {
    return nums.reduce((total, num) => total * num);
}

function add(...nums) {
    console.log(nums.reduce((total, num) => total += num));
}

function subtract(...nums) {
    return nums.reduce((total, num) => total -= num);
}

function divide(...nums) {
    return nums.reduce((total, num) => total / num);
}

function operate(operator,...nums) {
    return operator(...nums);
}

const numbers = document.querySelectorAll('.numbers');
const operation = document.querySelectorAll('.operate');
const screen = document.getElementById('screen');
const equals = document.querySelector('.equals');

const plus = document.querySelector('.plus');

let currentNumber;
let arrayNums = [];
let numberOps = [];

Array.from(numbers).forEach((number) => {
    number.addEventListener('click', (e) => {
        currentNumber = parseInt(e.target.id);
        screen.textContent = `${currentNumber}`;
        console.log(currentNumber);
    });
});

plus.addEventListener('click', (e) => {
    arrayNums.push(currentNumber);
    console.log(arrayNums);
    
});

equals.addEventListener('click', () => {
    arrayNums.push(currentNumber);
    console.log(arrayNums);
    operate(add,...arrayNums);
    arrayNums = [];
});



//operate(add,...arrayNums);
