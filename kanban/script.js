function addTask(id) {
  let taskName = document.getElementById(`${id}`);
  let taskValue = taskName.querySelector("input").value;

  let dragElement = document.createElement("div");
  dragElement.textContent = taskValue;

  dragElement.setAttribute("draggable", "true");
  dragElement.classList.add("task-d");

  // Add drag events
  dragElement.addEventListener("dragstart", dragStart);
  dragElement.addEventListener("dragend", dragEnd);

  taskName.appendChild(dragElement);
  taskName.querySelector("input").value = "";
}

let draggedItem = null;

function dragStart(event) {
  draggedItem = event.target;
  event.target.classList.add("dragging"); // Add visual effect
  event.dataTransfer.setData("text/plain", ""); // Required for drag to work
}

function dragEnd(event) {
  event.target.classList.remove("dragging");
}

// Enable drop zones (Kanban columns)
let columns = document.querySelectorAll(".column");

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("drop", drop);
});

function dragOver(event) {
  event.preventDefault(); // Necessary to allow dropping
}

function drop(event) {
  event.preventDefault();
  if (draggedItem) {
    event.target.appendChild(draggedItem);
    draggedItem = null;
  }
}
