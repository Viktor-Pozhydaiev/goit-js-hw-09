const startBtn = document.querySelector('button[data-start="start"]');
const stopBtn = document.querySelector('button[data-stop="stop"]');
const body = document.querySelector('body');

let timerId = null;

const startChanging = startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    startBtn.disabled = 'true';
    body.style.backgroundColor = ` #${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, 1000);
});

const stopChanging = stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
});
