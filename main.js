const toggleBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeBtn");
const offcanvas = document.getElementById("offcanvasNav");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  offcanvas.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  offcanvas.classList.remove("show");
});