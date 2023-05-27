const form = document.querySelector('.feedback-form');
const inputField = document.querySelector('[name="email"]');
const messageField = document.querySelector('[name="message"]');

const textStorage = {
  email: '',
  message: '',
};

window.addEventListener('DOMContentLoaded', () => {
  const arr = JSON.parse(localStorage.getItem('feedback-form-state'));
  inputField.value = arr === null ? '' : arr.email;
  messageField.value = arr === null ? '' : arr.message;
});

function setStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(textStorage));
}

inputField.addEventListener(
  'input',
  _.throttle(e => {
    textStorage.email = e.target.value;
    setStorage();
  }, 500)
);

messageField.addEventListener(
  'input',
  _.throttle(e => {
    textStorage.message = e.target.value;
    setStorage();
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(textStorage);
  textStorage = {};
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
});
