function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16) .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let colorChangeInterval = null;
stopBtn.disable = true;

function startColorChange() {
  colorChangeInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    stopBtn.disable = false;
    startBtn.disable = true;
  }, 1000);
}

function stopColorChange() {
clearInterval(colorChangeInterval);
stopBtn.disable = true;
startBtn.disable = false;
}

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
