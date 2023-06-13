const resultScreen = document.getElementById('result-screen');
const resultContainer = document.getElementById('result-container');
let result = '';

// Retrieve results from local storage on page load
window.addEventListener('load', function () {
  if (localStorage.getItem('result')) {
    result = localStorage.getItem('result');
    updateScreen();
  }

  if (localStorage.getItem('resultContainer')) {
    resultContainer.innerHTML = localStorage.getItem('resultContainer');
  }
});

function appendValue(value) {
  result += value;
  updateScreen();
}

function deleteCharacter() {
  result = result.slice(0, result.length - 1);
  updateScreen();
}

function calculateResult() {
  try {
    const calculatedResult = eval(result);
    result = calculatedResult.toFixed(2);
    updateScreen();
    showResultBox(result);
    saveResultToLocalStorage(result);
  } catch (error) {
    console.log('Error: Invalid Expression');
    resultScreen.textContent = 'Error';
    result = '';
  }
}

function updateScreen() {
  resultScreen.textContent = result;
}

function showResultBox(result) {
  const div = document.createElement('div');
  div.textContent = result;
  div.className = 'result-box';

  resultContainer.appendChild(div);
}

function saveResultToLocalStorage(result) {
  localStorage.setItem('result', result);
  localStorage.setItem('resultContainer', resultContainer.innerHTML);
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  const shiftKey = event.shiftKey;

  if (shiftKey && key === 'Backspace') {
    // Shift + Backspace: Delete all current input
    result = '';
    updateScreen();
  } else if (key >= '0' && key <= '9') {
    appendValue(key);
  } else if (key === '.') {
    appendValue('.');
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendValue(key);
  } else if (key === 'Backspace') {
    deleteCharacter();
  } else if (key === 'Enter') {
    calculateResult();
  }
});

// Clear result button

const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function () {
  resultContainer.innerHTML = ''; // Clear the contents of the result-container
  localStorage.removeItem('result');
  localStorage.removeItem('resultContainer');
});
