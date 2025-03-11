const startButton = document.getElementById("startButton");

startButton.addEventListener("click", setCountDown);

function setCountDown() {
  let valueC = parseInt(document.getElementById("countDownInput").value);
  let displayCount = document.getElementById("CountDownDisplay");

  if (isNaN(valueC)) {
    displayCount.innerHTML = "please enter a valid number";
  }

  if (valueC < 0) {
    displayCount.innerHTML = "please enter seconds > 0";
  }

  const timer = setInterval(() => {
    valueC--;
    displayCount.innerText = `Time remaining ${valueC}`;
    if (valueC <= 0) {
      clearInterval(timer);
      displayCount.innerText = "Time up ";
    }
  }, 1000);
}
