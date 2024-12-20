
const sideBar = document.getElementById("logo-sidebar");
const buttonHamb = document.getElementById("menu");

setTimeout(() => {

  sideBar.classList.add('right-0');
  sideBar.classList.remove('left-0');
  sideBar.classList.remove('hidden');

}, 20);


setInterval(() => {

  sideBar.classList.remove('-translate-x-full');

}, 1);