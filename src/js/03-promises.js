import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
const throttle = require('lodash.throttle');

const refs = {
  button: document.querySelector('button'),
  form: document.querySelector('.form'),
  inputArray: document.querySelectorAll('input'),
};

let formData = {};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  formData[e.target.name] = Number(e.target.value);
  return formData;
}

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = formData;
  let time = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, time).then(success).catch(failed);
    time += step;
  }

  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function success({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function failed({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
