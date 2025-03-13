function addTask(id) {
  let taskName = document.getElementById(`${id}`);
  let taskValue = taskName.querySelector("input").value;

  let dragElement = document.createElement("div");
  dragElement.textContent = taskValue;

  dragElement.setAttribute("draggable", "true");
  dragElement.classList.add("task-d");

  taskName.appendChild(dragElement);
}
