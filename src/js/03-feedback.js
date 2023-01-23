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
    const preData = JSON.stringify(fd);
    unparsedData = localStorage.setItem(FEEDBACK_DATA, JSON.parse(fd));
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
  console.log(givenData);
  // const parsedData = JSON.parse(givenData);
  if (givenData) {
    // refs.form.elements.email.value = parsedData.email;
    // refs.form.elements.message.value = parsedData.message;
  }
  refs.form.elements.email.value = '';
  refs.form.elements.message.value = '';
}
