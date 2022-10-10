const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit); //блок подписок

function onFormSubmit(event) {
  event.preventDefault();
  //блок обработки отправки формы
  //   console.log("This is form submit");
  //   console.log(event);

  //   const formElements = event.currentTarget.elements;
  //   const email = formElements.email.value;
  //   const password = formElements.password.value;

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password !== "") {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  } else {
    alert("Необхідно заповнити усі поля!");
  }
}
