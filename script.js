
function multiply(...nums) {
    return nums.reduce((total, num) => total * num);
}

function add(...nums) {
    return nums.reduce((total, num) => total += num);
}

function subtract(...nums) {
    return nums.reduce((total, num) => total -= num);
}

function divide(...nums) {
    return nums.reduce((total, num) => total / num);
}

