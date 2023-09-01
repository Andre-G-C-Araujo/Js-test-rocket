const firstButton = document.querySelector(".btn");
const secondDiv = document.querySelector(".card");

firstButton.addEventListener("click", () => {
  firstButton.classList.add("anima");

  setTimeout(() => {
    firstButton.classList.add("hiddenDiv");
  }, 2999);
  setTimeout(() => {
    secondDiv.classList.remove("hiddenDiv");
  }, 4500);
});
