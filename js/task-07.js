const refs = {
  inputFontSizeControl: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

refs.inputFontSizeControl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.spanText.style.fontSize = refs.inputFontSizeControl.value + "px";
}
