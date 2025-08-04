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

function toggleLanguage() {
  // Check if the checkbox is turned on (checked)
  const isTagalog = document.getElementById("langToggle").checked;

  // Select all elements that have data-en attributes
  const elements = document.querySelectorAll("[data-en]");

  // For each of those elements...
  elements.forEach(el => {
    // Change the visible text based on checkbox state
    if (isTagalog) {
      el.textContent = el.getAttribute("data-tl"); // Show Tagalog
    } else {
      el.textContent = el.getAttribute("data-en"); // Show English
    }
  });
}

// JavaScript checks if the checkbox is checked.

// It grabs all elements that have a data-en attribute (which means they're translatable).

// For each element, it sets the visible text (textContent) to either English or Tagalog depending on the checkbox