//number generator ------------------------------------------------ number generator 

// Get the necessary elements
const amountDropdown = document.getElementById('number-amount');
const lengthDropdown = document.getElementById('number-length');
const resultSpan = document.getElementById('number-result');
const generateButton = document.getElementById('number-generate');

// Event listener for generate button click
generateButton.addEventListener('click', generateRandomNumber);

// Function to generate random number
function generateRandomNumber() {
  const amount = parseInt(amountDropdown.value);
  const length = parseInt(lengthDropdown.value);

  let numbers = [];

  while (numbers.length < amount) {
    let randomNumber = '';
    for (let i = 0; i < length; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  resultSpan.textContent = numbers.join(' | ');
}

//word generator ----------------------------------------------------- word generator

// Get the necessary elements
const amountDropdownwords = document.getElementById('words-amount');
const lengthDropdownwords = document.getElementById('words-length');
const resultSpanwords = document.getElementById('words-result');
const generateButtonwords = document.getElementById('words-generate');

// Event listener for generate button click
generateButtonwords.addEventListener('click', generateRandomWords);

// Function to generate random words using Chance.js library
function generateRandomWords() {
  const amount = parseInt(amountDropdownwords.value);
  const length = parseInt(lengthDropdownwords.value);

  let words = [];

  const chance = new Chance();

  while (words.length < amount) {
    const newWord = chance.word({ length });

    if (!words.includes(newWord)) {
      words.push(newWord);
    }
  }

  resultSpanwords.textContent = words.join(' | ');
}

//password generator ------------------------------------- passwird generator

// Get the necessary elements
const lengthInput = document.getElementById('password-length');
const includeUppercaseInput = document.getElementById('includeUppercase');
const includeNumbersInput = document.getElementById('includeNumbers');
const includeSymbolsInput = document.getElementById('includeSymbols');
const resultSpanPassword = document.getElementById('password-result');
const generatePasswordButton = document.getElementById('password-generate');

// Event listener for generate button click
generatePasswordButton.addEventListener('click', generateRandomPassword);

// Function to generate a random password
function generateRandomPassword() {
  const length = parseInt(lengthInput.value);
  const includeUppercase = includeUppercaseInput.value === 'true';
  const includeNumbers = includeNumbersInput.value === 'true';
  const includeSymbols = includeSymbolsInput.value === 'true';

  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';

  if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeNumbers) {
    characters += '0123456789';
  }

  if (includeSymbols) {
    characters += '!@#$%^&*()_-+=<>?';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  resultSpanPassword.textContent = password;
}

// qr code generator -------------------------------------- qr code generator

function generateQRCode() {
  var text = document.getElementById("inputText").value;
  var qrcodeElement = document.getElementById("qrcode");

  // Clear any existing QR code
  qrcodeElement.innerHTML = '';

  if (text !== '') {
    var qrcode = new QRCode(qrcodeElement, {
      text: text,
      width: 128,
      height: 128,
    });
  }
}

function copyQRCode() {
  var qrcodeElement = document.getElementById("qrcode");
  var qrcodeImage = qrcodeElement.querySelector("img");

  if (qrcodeImage) {
    var canvas = document.createElement("canvas");
    canvas.width = qrcodeImage.width;
    canvas.height = qrcodeImage.height;
    var context = canvas.getContext("2d");
    context.drawImage(qrcodeImage, 0, 0);
    canvas.toBlob(function (blob) {
      var clipboardItem = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([clipboardItem]);
    });
  }
}

function downloadQRCode() {
  var userInput = document.getElementById("inputText").value;
  var qrcodeElement = document.getElementById("qrcode");
  var qrcodeImage = qrcodeElement.querySelector("img");

  if (qrcodeImage) {
    var link = document.createElement("a");
    link.href = qrcodeImage.src;
    link.download = userInput + "-qrcode.png";
    link.click();
  }
}