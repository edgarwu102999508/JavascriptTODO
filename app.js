const taskInput = document.querySelector(".taskInput");
const addBtn = document.querySelector(".addBtn");
const task = document.querySelector(".toDoList");

addBtn.addEventListener("click", onClick);
function onClick(e) {
  if (taskInput.value === "") {
    alert("Please input your task name.");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "toDoItem";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Append li to ul
  task.appendChild(li);
  // Clear input
  taskInput.value = "";
}
