document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const toggleBtn = document.getElementById("menuToggle");
    const closeBtn = document.getElementById("closeBtn");
    const offcanvas = document.getElementById("offcanvasNav");
    const langToggle = document.getElementById("langToggle");

    // Offcanvas nav toggle
    toggleBtn.addEventListener("click", () => {
      offcanvas.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
      offcanvas.classList.remove("show");
    });

    // Language toggle logic
    function decodeHTML(html) {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }

    function toggleLanguage() {
      const isTagalog = langToggle.checked;
      const elements = document.querySelectorAll("[data-en]");

      elements.forEach((el) => {
        const html = el.getAttribute(isTagalog ? "data-tl" : "data-en");
        el.innerHTML = decodeHTML(html);
      });

      localStorage.setItem("language", isTagalog ? "tagalog" : "english");
    }

    function loadLanguagePreference() {
      const savedLanguage = localStorage.getItem("language");

      langToggle.checked = savedLanguage === "tagalog";
      toggleLanguage();
    }

    langToggle.addEventListener("change", toggleLanguage);
    loadLanguagePreference();
  });

  // Outside DOMContentLoaded: safe to define now
  const codeArea = document.getElementById("code");
  const inputArea = document.getElementById("userInput");

  // Load saved data from localStorage
  const savedCode = localStorage.getItem("codeContent");
  if (savedCode !== null) {
    codeArea.value = savedCode;
  }

  const savedInput = localStorage.getItem("userInputContent");
  if (savedInput !== null) {
    inputArea.value = savedInput;
  }

  // Save data on every change
  codeArea.addEventListener("input", () => {
    localStorage.setItem("codeContent", codeArea.value);
  });

  inputArea.addEventListener("input", () => {
    localStorage.setItem("userInputContent", inputArea.value);
  });

  async function runCode() {
    const code = document.getElementById("code").value;
    const input = document.getElementById("userInput").value;
    const outputElement = document.getElementById("output");

    if (code.trim() === ""){
      outputElement.textContent = "Please Input Code!!";
    }
    
    outputElement.textContent = "Running your code...";

    try {
      const response = await fetch(
        "https://corsproxy.io/?https://api.jdoodle.com/v1/execute",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientId: "6d19cfcca104ec72250ddbc2075ae9b5",
            // c4eff6ae4a7dd9499bf6b8cf6959e93e
            clientSecret:
              "8773edafcb69275562d078046d1fc1d23f446d4c2e974b02f097e85c2447ff79",
            // 8d9b96246d6a21dd88e9fde6a4e7444ab047afd3dceea62b388fe76790e1a08b
            script: code,
            language: "java",
            versionIndex: "4",
            stdin: input,
          }),
        }
      );

      const result = await response.json();
      outputElement.textContent = result.output || result.error || "No output.";
      
      console.log(result); // Add this to inspect full API response in console

    } catch (error) {
      outputElement.textContent = "Error: " + error.message;
    }
  }