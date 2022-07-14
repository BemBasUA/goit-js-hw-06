const form = document.querySelector(`.login-form`);
const inputs = document.querySelectorAll(`input`);
form.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    alert(`Всі поля повинні бути заповнені`);
  } else {
    const object = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };

    console.log(object);
    event.currentTarget.reset();
  }
}
