import flatpickr from 'flatpickr';
import 'notiflix/dist/notiflix-3.2.5.min.css';

import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const inputPicker = document.querySelector('#datetime-picker');
// console.dir(inputPicker);
const startBtn = document.querySelector('button[data-start]');
const dayValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', true);
let ms = null;
console.log(ms);
let futureDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose: function (selectedDates) {
    const now = new Date();
    console.log(now);

    if (selectedDates[0] < now) {
      // window.alert("Please choose a date in the future")
      Notify.failure('Please choose a date in the future');
      console.log(selectedDates[0]);
    } else {
      // console.log("Все ок");
      startBtn.removeAttribute('disabled', true);
      futureDate = selectedDates[0];
    }
  },
};

startBtn.addEventListener('click', e => {
  // console.log(e);
  let intervalTimer = setInterval(() => {
    let now = new Date();

    ms = futureDate.getTime() - now.getTime();
    // console.log(ms);
    let resultConvertMs = convertMs(ms);

    dayValue.textContent = addLeadingZero(resultConvertMs.days);
    hoursValue.textContent = addLeadingZero(resultConvertMs.hours);
    minutesValue.textContent = addLeadingZero(resultConvertMs.minutes);
    secondsValue.textContent = addLeadingZero(resultConvertMs.seconds);
    if (ms <= 0) {
      clearInterval(intervalTimer);
      dayValue.textContent = addLeadingZero(0);
      hoursValue.textContent = addLeadingZero(0);
      minutesValue.textContent = addLeadingZero(0);
      secondsValue.textContent = addLeadingZero(0);
    }
  }, 1000);
});

flatpickr(inputPicker, options);
