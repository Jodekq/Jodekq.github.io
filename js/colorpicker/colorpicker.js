const colorPreview = document.querySelector('.color-preview');
const selectorDot = document.querySelector('.selector-dot');
const colorSchemeSelector = document.querySelector('.color-scheme-selector');
const spectrumSlider = document.querySelector('.spectrum-slider');
const hexCodeDisplay = document.querySelector('.hex-code-display');

// Event listener for color scheme selector
colorSchemeSelector.addEventListener('input', () => {
  const selectorWidth = colorSchemeSelector.offsetWidth;
  const selectedColorIndex = Math.floor((colorSchemeSelector.value / 100) * selectorWidth);
  const colorScheme = [
    'red', 'yellow', 'lime', 'cyan', 'blue', 'magenta', 'red'
  ];
  const selectedColor = colorScheme[selectedColorIndex];
  selectorDot.style.left = `${selectedColorIndex}px`;
  selectorDot.style.backgroundColor = selectedColor;
  colorPreview.style.backgroundColor = selectedColor;
  hexCodeDisplay.value = rgbToHex(selectedColor);
});

// Event listener for spectrum slider
spectrumSlider.addEventListener('input', () => {
  const hue = spectrumSlider.value;
  const selectedColor = `hsl(${hue}, 100%, 50%)`;
  colorPreview.style.backgroundColor = selectedColor;
  hexCodeDisplay.value = rgbToHex(selectedColor);
});

// Function to convert RGB color to HEX code
function rgbToHex(color) {
  const rgbArray = color.match(/\d+/g);
  const hexArray = rgbArray.map((value) => {
    const hexValue = parseInt(value).toString(16);
    return hexValue.length === 1 ? '0' + hexValue : hexValue;
  });
  return '#' + hexArray.join('');
}