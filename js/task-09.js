function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // return "rgb(0, 0, 0)";
}
const btnColor = document.querySelector(".change-color");
const colorLabel = document.querySelector(".color");
const body = document.querySelector("body");

btnColor.addEventListener("click", changeColorHandler);
//добавляем слушателя события, передаем тип события, на который хотим реагировать

function changeColorHandler(event) {
  body.style.background = getRandomHexColor();
  colorLabel.textContent = body.style.background;

  if (getRandomHexColor() === "rgb(0, 0, 0)") {
    colorLabel.style.color = "#ffffff";
    document.querySelector(".widget > p").style.color = "#ffffff";
  }
}

//======================2 спосіб=====================
// const btnColor = document.querySelector(".change-color");

// const bodyBg = () => {
//   let RandomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   document.body.style.backgroundColor = RandomHexColor;
//   document.querySelector(".color").textContent = RandomHexColor;
// };

// btnColor.addEventListener("click", bodyBg);
// bodyBg();
