//dropdown menu

const dropdownToggle = document.getElementById('output-format-dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu-wrapper .dropdown-menu');

dropdownToggle.addEventListener('click', function() {
  const menuDisplayStyle = getComputedStyle(dropdownMenu).display;
  dropdownMenu.style.display = (menuDisplayStyle === 'block') ? 'none' : 'block';
});

dropdownMenu.addEventListener('click', function(event) {
  const selectedFormat = event.target.getAttribute('data-format');
  if (selectedFormat) {
    dropdownToggle.textContent = selectedFormat.toUpperCase();
    dropdownMenu.style.display = 'none';
  }
});

//image converter



