const abstraction1 = document.getElementById("abstraction1");
const chooseButton = document.getElementById("features__navigation");

chooseButton.addEventListener("click", () => {
  abstraction1.classList.add("features__right-abstraction1_active");
});
