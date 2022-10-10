const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

categories.forEach((elem) => {
  let categEl = elem.querySelector("h2").textContent;
  console.log("Category:", categEl);

  let totalElItem = elem.querySelectorAll("ul > li");
  console.log("Elements:", totalElItem.length);
});
