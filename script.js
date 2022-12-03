const navImg = document.getElementById("navImg");
const navBar = document.getElementById("cellphoneNavBar");
const close = document.getElementById("close");

navImg.addEventListener("click", () => {
  navBar.classList.add("ativar");
});

close.addEventListener("click", () => {
  navBar.classList.remove("ativar");
});
