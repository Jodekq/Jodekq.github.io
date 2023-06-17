function setCircle(base, rotation, steps) {
    const circleSvg = document.getElementById('circle-timer-svg');

    circleSvg.style.setProperty('--base', base);
    circleSvg.style.setProperty('--rotation', rotation);
    circleSvg.style.setProperty('--steps', steps);
}


// bug: timer doesnt continue when not on page

let timerInterval;
let totalTime;
let timeLeft;
let originalHours;
let originalMinutes;
let originalSeconds;

function startTimer() {
  const hoursElement = document.getElementById("timer-select-hours");
  const minutesElement = document.getElementById("timer-select-minutes");
  const secondsElement = document.getElementById("timer-select-seconds");

  const hours = parseInt(hoursElement.value);
  const minutes = parseInt(minutesElement.value);
  const seconds = parseInt(secondsElement.value);

  originalHours = hours;
  originalMinutes = minutes;
  originalSeconds = seconds;

  totalTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
  timeLeft = totalTime;

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {

    timeLeft -= 10;
  
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeLeft = 0;
    }
  
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    setCircle(60, 1, 60);
  
    const timerValue = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    const timerTitle = `${timerValue} - Timer`;
  
    const timerValueElement = document.querySelector(".timer-value");
    timerValueElement.textContent = timerValue;
  
    // Calculate expiration time
    const currentTime = new Date();
    const expirationTime = new Date(currentTime.getTime() + timeLeft);
    const expirationHours = expirationTime.getHours();
    const expirationMinutes = expirationTime.getMinutes();
    const expirationTimeString = padZero(expirationHours) + ':' + padZero(expirationMinutes);
  
    const expirationTimeElement = document.getElementById("expiration-time");
    expirationTimeElement.textContent = expirationTimeString;
  
    document.title = timerTitle;
  }

function padZero(number) {
  return number.toString().padStart(2, "0");
}

function stopTimer() {
    clearInterval(timerInterval);
    timeLeft = 0;

    const timerValueElement = document.querySelector(".timer-value");
    timerValueElement.textContent = "00:00:00";

    const expirationTimeElement = document.getElementById("expiration-time");
    expirationTimeElement.textContent = "";

    document.title = "Project Y / Timer";
}

function pauseTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    } else {
      timerInterval = setInterval(updateTimer, 10);
    }
  }
  