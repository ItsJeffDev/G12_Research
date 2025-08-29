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

function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function toggleLanguage() {
  const isTagalog = document.getElementById("langToggle").checked;
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach(el => {
    const html = el.getAttribute(isTagalog ? "data-tl" : "data-en");
    el.innerHTML = decodeHTML(html);
  });
  
  localStorage.setItem("language", isTagalog ? "tagalog" : "english");
}

// Load language preference from localStorage and apply it
function loadLanguagePreference() {
  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage === "tagalog") {
    langToggle.checked = true;
  } else {
    langToggle.checked = false;
  }

  toggleLanguage(); // Apply language text to the page
}

langToggle.addEventListener("change", toggleLanguage);

window.addEventListener("DOMContentLoaded", loadLanguagePreference);

// JavaScript checks if the checkbox is checked.

// It grabs all elements that have a data-en attribute (which means they're translatable).

// For each element, it sets the visible text (textContent) to either English or Tagalog depending on the checkbox