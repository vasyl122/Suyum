const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");
const body = document.querySelector(".body");
hamburger.addEventListener('click', () => {
   hamburger.classList.toggle("change")
   navsub.classList.toggle("nav-change")
   // body.classList.toggle("body-lock")
});

const checkbox = document.querySelector(".checkbox")
const checkboxLebel = document.querySelector(".checkbox__lebel")
checkbox.addEventListener('click', () => {
   checkbox.classList.toggle("checkbox-activ")
   checkboxLebel.classList.toggle("checkbox__lebel-activ")
   body.classList.toggle("body-lock")
});