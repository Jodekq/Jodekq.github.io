//toggle themes ---------------------------------------- toggle themes
const darkThemeButton = document.getElementById("dark-theme-button");
const lightThemeButton = document.getElementById("light-theme-button");
const greenThemeButton = document.getElementById("green-theme-button");

// Retrieve the stored theme from localStorage
const storedTheme = localStorage.getItem('data-theme');

// If a theme is stored, apply it
if (storedTheme) {
  document.body.setAttribute('data-theme', storedTheme);
}

darkThemeButton.addEventListener('click', () => {
  applyTheme('dark');
});

lightThemeButton.addEventListener('click', () => {
  applyTheme('light');
});

greenThemeButton.addEventListener('click', () => {
  applyTheme('green');
});

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  // Store the selected theme in localStorage
  localStorage.setItem('data-theme', theme);
}

// button toggle target="_blank"

const storedtoggleTarget = localStorage.getItem('target-blank-active');

function toggleTargetBlank() {
  var links = document.getElementsByClassName("change-target");
  var button = document.querySelector("button");
  var isTargetBlankActive = links[0].hasAttribute("target");

  if (isTargetBlankActive) {
    for (var i = 0; i < links.length; i++) {
      links[i].removeAttribute("target");
    }
    button.innerHTML = '<i class="bx bx-window"></i>';
  } else {
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("target", "_blank");
    }
    button.innerHTML = '<i class="bx bx-windows"></i>';
  }
  
  // Save the target attribute state in local storage
  var targetBlankActive = isTargetBlankActive ? "off" : "on";
  localStorage.setItem('target-blank-active', targetBlankActive);
}

// Load the target attribute state from local storage on page load
window.addEventListener('DOMContentLoaded', function() {
  if (storedtoggleTarget === "on") {
    toggleTargetBlank();
  }
});

// open mini calc function 

function openWindowMiniWindow(url) {
  var width = 570;
  var height = 350;
  var left = 0; 
  var top = 1; 

  var popup = window.open(url, "_blank", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
  popup.location = url;
}