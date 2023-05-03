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
  if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch(operator) {
    case '+':
      result = a + b;
      break;
    case '-': 
      result = b - a;
      break;
    case 'X':
      result = a * b;
      break;
    case '/':
      result = b / a;
      break;
    case '2^':
      result = b ** a;
      break;
  }
  currentNumber.innerHTML = result;
  previousNumber.innerHTML = '';
  mathSign.innerHTML = '';
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