const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit); //блок подписок

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  } else {
    alert("Необхідно заповнити усі поля!");
  }
}
