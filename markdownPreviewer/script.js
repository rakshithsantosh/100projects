document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("markdown-input");
  const previewDiv = document.getElementById("preview");
  const clearBtn = document.getElementById("clear-btn");

  // Function to update the preview in real-time
  function updatePreview() {
    const markdownText = inputField.value;
    previewDiv.innerHTML = marked.parse(markdownText); // Render Markdown
  }

  // Event listener for real-time input updates
  inputField.addEventListener("input", updatePreview);

  // Clear Button functionality
  clearBtn.addEventListener("click", function () {
    inputField.value = "";
    previewDiv.innerHTML = "";
  });

  // Initial render (optional)
  updatePreview();
});
