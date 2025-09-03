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
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

async function runCode() {
  const code = document.getElementById("code").value;
  const input = document.getElementById("userInput").value;
  const outputElement = document.getElementById("output");

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
          clientId: "c4eff6ae4a7dd9499bf6b8cf6959e93e",
          clientSecret:
            "8d9b96246d6a21dd88e9fde6a4e7444ab047afd3dceea62b388fe76790e1a08b",
          script: code,
          language: "java",
          versionIndex: "4",
          stdin: input,
        }),
      }
    );

    const result = await response.json();
    outputElement.textContent = result.output || "No output.";
  } catch (error) {
    outputElement.textContent = "Error: " + error.message;
  }
}

// async function runCode() {
//     const code = document.getElementById('code').value;
//     const outputElement = document.getElementById("output");

//     outputElement.textContent = "Running your code...";

//     try {
//         const response = await fetch("https://corsproxy.io/?https://api.jdoodle.com/v1/execute", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 clientId: "c4eff6ae4a7dd9499bf6b8cf6959e93e",
//                 clientSecret: "8d9b96246d6a21dd88e9fde6a4e7444ab047afd3dceea62b388fe76790e1a08b",
//                 script: code,
//                 language: "java",
//                 versionIndex: "4"

//             })
//         });

//         const result = await response.json();
//         outputElement.textContent = result.output;
//     } catch (error) {
//         outputElement.textContent = "Error: " + error.message;
//     }
// }
