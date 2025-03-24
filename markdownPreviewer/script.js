document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("markdown-input");
  const previewDiv = document.getElementById("preview");
  const clearBtn = document.getElementById("clear-btn");
  const copyBtn = document.getElementById("copy-btn");
  const downloadBtn = document.getElementById("download-btn");
  const toggleThemeBtn = document.getElementById("toggle-theme");
  const wordCount = document.getElementById("word-count");

  // Load saved Markdown from localStorage
  inputField.value = localStorage.getItem("markdownContent") || "";
  updatePreview();

  // Function to update the preview in real-time
  function updatePreview() {
    const markdownText = inputField.value;
    previewDiv.innerHTML = marked.parse(markdownText);

    // Update localStorage
    localStorage.setItem("markdownContent", markdownText);

    // Update word & character count
    const words = markdownText.trim().split(/\s+/).filter(Boolean).length;
    const characters = markdownText.length;
    wordCount.innerText = `Words: ${words} | Characters: ${characters}`;

    // Syntax highlighting
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }

  // Event listener for real-time input updates
  inputField.addEventListener("input", updatePreview);

  // Clear Button functionality
  clearBtn.addEventListener("click", function () {
    inputField.value = "";
    previewDiv.innerHTML = "";
    localStorage.removeItem("markdownContent");
    wordCount.innerText = "Words: 0 | Characters: 0";
  });

  // Copy to Clipboard
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(inputField.value).then(() => {
      alert("Markdown copied to clipboard!");
    });
  });

  // Download Markdown as .md file
  downloadBtn.addEventListener("click", function () {
    const blob = new Blob([inputField.value], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "markdown.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  // Toggle Dark Mode
  toggleThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleThemeBtn.textContent = "☀ Light Mode";
    } else {
      toggleThemeBtn.textContent = "🌙 Dark Mode";
    }
  });

  // Initial render
  updatePreview();
});
