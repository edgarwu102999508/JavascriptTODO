const taskInput = document.querySelector(".taskInput");
const addBtn = document.querySelector(".addBtn");
const task = document.querySelector(".toDoList");
const clearBtn = document.querySelector(".clearBtn");

// Load all event listeners
loadEventListener();

// Load all event listeners
function loadEventListener() {
  // Add task event
  addBtn.addEventListener("click", addTask);
  // Add clear task event
  clearBtn.addEventListener("click", clearTask);
  // Add task list event
  task.addEventListener("click", removeTask);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Please input your task name.");
    return;
  }

  // Create li element
  const li = document.createElement("li");
  li.id = "listItem";

  // Create cheakbox
  li.innerHTML = '<input class="checkTask" type="checkbox" />';

  // Create del button
  const a = document.createElement("a");
  a.className = "removeTask";
  a.href = "#";
  a.innerHTML = '<i class="fa fa-times text-danger"></i>';

  // Append element to li
  li.appendChild(document.createTextNode(taskInput.value));
  li.appendChild(a);

  // Append li to ul
  task.appendChild(li);
  // Clear input
  taskInput.value = "";

  e.preventDefault();
}

function clearTask(e) {
  if (confirm("Do you really want to clear todo list?")) {
    task.innerHTML = "";
    e.preventDefault();
  }
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("removeTask")) {
    if (confirm("Are you Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
