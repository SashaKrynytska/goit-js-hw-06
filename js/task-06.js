const validationInput = document.querySelector("#validation-input");
const dataLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", (event) => {
  if (validationInput.value.length >= dataLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
