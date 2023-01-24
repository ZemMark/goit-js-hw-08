import throttle from 'lodash.throttle';
const FEEDBACK_DATA = 'feedback-form-state';
const refs = {
  form: document.querySelector('form'),
};
const fd = {};
// let parsedData;
// dataRestor();
// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener(
//   'input',
//   throttle(e => {
//     fd[e.target.name] = e.target.value;
//     const fdJSON = JSON.stringify(fd);
//     localStorage.setItem(FEEDBACK_DATA, fdJSON);
//   }, 1000)
// );

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(FEEDBACK_DATA);
//   console.log(fd);
// }

// function dataRestor() {
//   const givenData = localStorage.getItem(FEEDBACK_DATA);
//   parsedData = JSON.parse.apply(givenData);
//   console.log(parsedData.nmae);
//   if (givenData) {
//     if (
//       refs.form.elements.email.value === '' ||
//       refs.form.elements.message.value !== ''
//     ) {
//       refs.form.elements.email.value = parsedData.email;
//     } else if (
//       refs.form.elements.email.value !== '' ||
//       refs.form.elements.message.value === ''
//     ) {
//       parsedData.message = '';
//     }
//   }
// }
let parsedData;
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener(
  'input',
  throttle(e => {
    fd[e.target.name] = e.target.value;
    const fdJSON = JSON.stringify(fd);
    localStorage.setItem(FEEDBACK_DATA, fdJSON);
  }, 1000)
);

dataRestore();
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_DATA);
  console.log(parsedData);
}

function dataRestore(e) {
  const givenData = localStorage.getItem(FEEDBACK_DATA);
  try {
    parsedData = JSON.parse(givenData);
    if (!parsedData.email) {
      throw new SyntaxError('error: no email');
    }
    refs.form.elements.email.value = parsedData.email;
    refs.form.elements.message.value = parsedData.message;
    // if (parsedData.message) {
    // }
  } catch (e) {
    console.log('JSON error' + e);
  }
}
