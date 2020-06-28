const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const para = document.querySelector('.clock');

stopBtn.disabled = true;
let duration = 0;

function formatTime(duration) {
  hours = Math.floor(duration/3600);
  minutes = Math.floor((duration%3600)/60);
  seconds = duration%60;

  if (hours < 10) {
    hoursString = '0' + hours;
  } else {
    hoursString = hours;
  }

  if (minutes < 10) {
    minutesString = '0' + minutes;
  } else {
    minutesString = minutes;
  }

  if (seconds < 10) {
    secondsString = '0' + seconds;
  } else {
    secondsString = seconds;
  }

  durationString = hoursString + ':' + minutesString + ':' + secondsString;
  return durationString;
}

function displayDuration() {
  para.textContent = formatTime(duration);
  duration++;
}

startBtn.onclick = function() {
  running = setInterval(displayDuration, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

stopBtn.onclick = () => {
  clearInterval(running);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

resetBtn.addEventListener('click', () => {
  clearInterval(running);
  duration = 0;
  displayDuration();
  startBtn.disabled = false;
  stopBtn.disabled = true;
})

displayDuration();
