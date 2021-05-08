const body = document.querySelector("body");
const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const logo = document.querySelector("section")

header.addEventListener("click",function(){
menu.classList.toggle("open"),
burgerMenu.classList.toggle("active"), 
logo.classList.toggle("active")

;});