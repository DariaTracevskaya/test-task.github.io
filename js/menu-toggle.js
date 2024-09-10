document.getElementById("burger-menu").addEventListener("click", function () {
  this.classList.toggle("menu__icon--opened");
  document.getElementById("header-menu").classList.toggle("menu--shown");
});
