const display = document.getElementById('display');

let isPowerOn = true;
function powerOff() {
  isPowerOn = false;
  display.value = '';
  display.placeholder = '';
  display.disabled = true;
}
function powerOn() {
  isPowerOn = true;
  display.value = '';
  display.placeholder = '0';
  display.disabled = false;
}
function appendNumber(value) {
  if (!isPowerOn) return;
  if (display.value === 'Error' || (display.value === '0' && !isNaN(value))) {
    display.value = '';
    }
    console.log('value ', value)
  display.value += value;
}

function add(operator) {
  appendNumber(operator);
}

function subtract(operator) {
  appendNumber(operator);
}
 function divide(operator){
  
  appendNumber(operator)
 }
function slice(){
  if (!isPowerOn) return;
  display.value = display.value.slice(0, -1);
}
function multiply(operator) {
  appendNumber(operator);
}

function cleardisplay() {
  if (!isPowerOn) return;
  display.value = '';
}


function calculateSqrt() {
  if (!isPowerOn) return;
  if (!display.value) return;
  display.value = value < 0 ? 'Error' : Math.sqrt(value);
}

function calculateResult() {
  if (!isPowerOn) return;

  try {
    if (!display.value) return;

    let expression = display.value.split(' ')[0];

    const result = new Function(`return ${expression}`)();

    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      const typeLabel = getNumberType(result);
      display.value = `${result} (${typeLabel})`;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function getNumberType(num) {
  if (!Number.isInteger(num)) {
    return 'Decimal';
  }

  if (num === 0) {
    return 'Even';
  }

  const absNum = Math.abs(num);
  

  let isPrime = absNum > 1;
  for (let i = 2; i <= Math.sqrt(absNum); i++) {
    if (absNum % i === 0) {
      isPrime = false;
      break;
    }
  }

  const parity = absNum % 2 === 0 ? 'Even' : 'Odd';

  if (isPrime) {
    return `${parity} & Prime`;
  }
  return parity;
}

function calculateResult() {
  try {
    if (!display.value) return;
    let expression = display.value.split(' ')[0];

    const result = new Function(`return ${expression}`)();

    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      const typeLabel = getNumberType(result);
      display.value = `${result} (${typeLabel})`;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function appendNumber(value) {
  if (
    display.value === 'Error' || 
    display.value.includes('(') || 
    (display.value === '0' && !isNaN(value))
  ) {
    display.value = '';
  }
  display.value += value;
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}