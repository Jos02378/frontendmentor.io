const submitButton = document.querySelector('.card__button');
const emailInput = document.querySelector('.card__input');
const errorMessage = document.querySelector('.error-message');

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

submitButton.addEventListener('click', () => {
  console.log('hello');
  console.log(emailInput.value);
  if (emailInput.value.length == 0) {
    errorMessage.style.opacity = 1;
    emailInput.style.borderColor = 'red';
  } else if (!validateEmail(emailInput.value)) {
    errorMessage.innerHTML = 'Please provide a valid email';
    emailInput.style.borderColor = 'red';
    errorMessage.style.opacity = 1;
  } else {
    location.reload();
  }
});
