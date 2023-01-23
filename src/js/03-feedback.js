import throttle from 'lodash.throttle';
const FEEDBACK_DATA = 'feedback-form-state';
const refs = {
  form: document.querySelector('form'),
};
const fd = {};
let unparsedData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener(
  'input',
  throttle(e => {
    fd[e.target.name] = e.target.value;
    fdJSON = JSON.stringify(fd);
    localStorage.setItem(FEEDBACK_DATA, fdJSON);
  }, 1000)
);
dataRestor();
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_DATA);
}

function dataRestor() {
  const givenData = localStorage.getItem(FEEDBACK_DATA);
  let parsedData;
  try {
    parsedData = JSON.parse(givenData);
  } catch (error) {
    console.log('smth went wrong');
  }
  if (givenData) {
    console.log(givenData);
    refs.form.elements.email.value = parsedData.email;
    refs.form.elements.message.value = parsedData.message;
  } else {
    refs.form.elements.email.value = '';
    refs.form.elements.message.value = '';
  }
  if (
    refs.form.elements.email.value === '' ||
    refs.form.elements.message.value !== ''
  ) {
    refs.form.elements.email.value = '';
  } else if (
    refs.form.elements.email.value !== '' ||
    refs.form.elements.message.value === ''
  ) {
    parsedData.message = '';
  }
}
