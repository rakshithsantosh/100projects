const colorSelector = document.getElementById("color-selector");
const colorDisplay = document.getElementById("color-display");
const compliColor = document.getElementById("display");

colorSelector.addEventListener("click", () => {
  let color = colorSelector.value;
  colorDisplay.textContent = color;
  let complimentaryColor = getComplimentaryColor(color);
  compliColor.textContent = complimentaryColor;
});

function getComplimentaryColor(color) {
  const base = parseInt(color.slice(1), 16);
  const compliColorValue = (0xffffff ^ base).toString(16).padStart(6, "0");
  return compliColorValue;
}
