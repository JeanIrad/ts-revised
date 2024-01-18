const navBars = document.querySelector(".fa-bars");
const closeNav = document.querySelector(".fa-xmark");
const navList = document.querySelector("nav ul");
navBars.onclick = function () {
  alert("Hello World");
  navList.classList.toggle("show-nav");
};

closeNav.onclick = () => {
  navList.classList.remove("show-nav");
};
