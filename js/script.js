const abstraction1 = document.getElementById("abstraction1");
const abstraction2 = document.getElementById("abstraction2");
const chooseButton = document.getElementById("features__navigation");

chooseButton.addEventListener("click", () => {
  abstraction1.classList.add("features__right-abstraction1_active");
});

const burger = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", function (event) {
  event.stopPropagation(); 
  mobileNav.classList.toggle("open");
});

document.addEventListener("click", function (event) {
  if (!mobileNav.contains(event.target) && !burger.contains(event.target)) {
    mobileNav.classList.remove("open");
  }
});
