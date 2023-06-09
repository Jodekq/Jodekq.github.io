const resultScreen = document.getElementById('result-screen');
const resultContainer = document.getElementById('result-container');
let result = '';

// Retrieve results from local storage on page load
window.addEventListener('load', function () {
  if (localStorage.getItem('results')) {
    result = localStorage.getItem('results');
    updateScreen();
    restoreResultBoxes();
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
    result = calculatedResult.toString();
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
  let results = localStorage.getItem('results');

  if (results) {
    results = results.split(',');
    results.push(result);
  } else {
    results = [result];
  }

  localStorage.setItem('results', results.join(','));
}

function restoreResultBoxes() {
  const results = localStorage.getItem('results');

  if (results) {
    const resultsArray = results.split(',');

    resultsArray.forEach(function (result) {
      showResultBox(result);
    });
  }
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
  localStorage.removeItem('results'); // Remove the results from local storage
});

