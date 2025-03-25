const value = document.getElementById("todoHolder").value;
const container = document.getElementById("todo-list");

function addTask() {
  let liEle = document.createElement("div");
  let remove = document.createElement("span");
  remove.innerHTML = "x";

  liEle.innerHTML = value;
  liEle.classList.add("todo-style");
  container.appendChild(liEle);
}
