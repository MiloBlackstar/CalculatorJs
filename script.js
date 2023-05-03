//Global Variables
const currentNumber = document.querySelector('.current-number');
const previousNumber = document.querySelector('.previous-number p');
const mathSign = document.querySelector('.math-sign');
const numberButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let result = '';
//---------------

//functions

function displayNumbers() {
  if(this.textContent === '.' && currentNumber.innerHTML.includes('.')){
    return;
  } else if (this.textContent === '.' && currentNumber.innerHTML === '') {
    return currentNumber.innerHTML = '.0';
  }
  currentNumber.innerHTML += this.textContent;
}

function operate() {
  if(currentNumber.innerHTML === '' && this.textContent === '-') {
    currentNumber.innerHTML = '-';
    return;
  } else if (currentNumber.innerHTML === '') {
    return;
  }

  if (mathSign.innerHTML != '') {
    showResult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = '';
  
}

function showResult() {

}

function clearScreen() {

}

function clearHistory() {

}

//---------------

//listening buttons

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));


//---------------