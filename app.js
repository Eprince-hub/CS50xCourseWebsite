
//Menu show and hide
let menuBox = document.querySelector("#navigation");
let showMenu = document.querySelector("#menu-show");
let hideMenu = document.querySelector("#menu-hide");

showMenu.onclick = function() {
  menuBox.style.transform = "none";
  showMenu.style.display = "none";
  hideMenu.style.display = "block";
}

hideMenu.onclick = function() {
  menuBox.style.transform = "translateX(400px)";
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
}
